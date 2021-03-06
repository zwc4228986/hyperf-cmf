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

namespace App\Controller\Admin\Generator;

use App\Dao\Generator\GeneratorTableDao;
use App\Dao\System\GroupDao;
use App\Form\Elm;
use App\Middleware\CheckLoginMiddleware;
use App\Model\Admin\Menu;
use App\Model\Project;
use App\Model\User;
use App\Model\UserAuthentication;
use App\Model\UserProject;
use App\Request\Admin\Generator\GeneratorTableAddRequest;
use App\Service\AdminService;
use FormBuilder\Driver\CustomComponent;

use Hyperf\DbConnection\Db;
use Hyperf\HttpServer\Annotation\AutoController;
use App\Controller\AbstractController;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Annotation\GetMapping;
use Hyperf\HttpServer\Annotation\Middleware;
use Hyperf\Utils\Context;
use App\Middleware\CheckAdminMiddleware;

/**
 * @AutoController()
 * @Middleware(CheckAdminMiddleware::class)
 */
class GeneratorTableController extends AbstractController
{

    protected $route = 'admin/generator/generator_table';

    /**
     * @Inject()
     * @var GeneratorTableDao
     */
    protected $generatorTableDao;

    public function form()
    {
        $id = $this->request->input('id');
        if ($id) {
            $formData = $this->generatorTableDao->first($id)->toArray();
        } else {
            $formData = [];
        }
        $form = Elm::createForm($id ? $this->getRoute('edit') : $this->getRoute('add'));
        $form->setRule([
            Elm::input('name', '表名')->required(),
            Elm::hidden('id', $id),
        ]);
        $form = $form->setTitle(is_null($id) ? '添加表名' : '编辑组合数据')->formData($formData);
        succ(formToData($form));
    }

    public function lists()
    {
        $data = $this->generatorTableDao->lists($this->request->post());
        _SUCCESS($data);
    }


    public function add(GeneratorTableAddRequest $request)
    {
        $this->generatorTableDao->add($request->collection());
        _SUCCESS();
    }


}