<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://doc.hyperf.io
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */

namespace App\Controller\Util;

use App\Controller\AbstractController;
use App\Model\Admin\ConfigValue;
use App\Model\Admin\File;
use App\Model\User;
use App\Service\UserService;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Guzzle\ClientFactory;
use Hyperf\HttpServer\Annotation\AutoController;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Gregwar\Captcha\CaptchaBuilder;
use League\Flysystem\Filesystem;
use Hyperf\Apidog\Annotation\ApiController;
use Hyperf\Apidog\Annotation\FormData;
use Hyperf\Apidog\Annotation\PostApi;
use Hyperf\Apidog\Annotation\GetApi;

/**
 * @ApiController(tag="文件管理",prefix="util/file",description="")
 */
class FileController extends AbstractController
{
    /**
     * @Inject()
     * @var Filesystem
     */
    protected $filesystem;


    /**
     * @Inject()
     * @var File
     */
    protected $fileModel;

    /**
     * @Inject()
     * @var ConfigValue
     */
    protected $configValueModel;

    /**
     * @GetApi(path="upload", description="上传文件")
     * @PostApi(path="upload", description="上传文件")
     * @FormData(key="file|文件", rule="file")
     */
    public function upload()
    {
        $file = $this->request->file('file')?:err('file is empty');

        $stream = fopen($file->getRealPath(), 'r+');

        $filePath = $this->getFilePath('img',$file->getExtension());

        if(!$this->filesystem->writeStream( $filePath, $stream)){
             err('writeStream is wrong');
        }

        //插入数据库
        $file = $this->fileModel->create(['name'=>$file->getClientFilename(),'path'=>$filePath,'size'=>$file->getSize()]);

        fclose($stream);

        if($this->request->input('type') == 'tinymce'){
            return $this->response->json( ['location'=> $this->configValueModel->_get('site_url').$filePath]);
        }else{
            succ(['id'=>$file->id,'path'=>$filePath,'src'=>$this->configValueModel->_get('site_url').$filePath]);

        }

    }

    public function getFilePath($type='img',$ext=''){
        $path = '/update/'.$type.'/'.date('ymd'). '/' .time().rand(1000,9999).'.'.$ext;
        return $path;
    }

    /**
     * @GetApi(path="get_path", description="")
     * @PostApi(path="get_path", description="")
     * @FormData(key="id|文件id", rule="required")
     */
    public function get_path(){
        $id = $this->request->input('id');

        if(empty($id)){
            succ('');
        }else{
            succ($this->fileModel->getFullPath($id));

        }


    }
}