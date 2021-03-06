<?php

namespace App\Service;

use App\Ide\ModelIDE;
use App\Model\Model;
use Hyperf\Database\Model\Builder;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Redis\Redis;
use Hyperf\Utils\Context;

abstract class BaseService
{
    /**
     * @var Builder
     */
    public $baseModel;


    /**
     * @Inject()
     * @var Redis
     */
    protected $redis;

    public function getModel()
    {
        return $this->baseModel;
    }

    public function page($isPage = true)
    {
        _SetNotPage($isPage);
        return $this;
    }

    public function query()
    {
        return $this->getModel()->newQuery();
    }

    public function where(array $params): Builder
    {
        return $this->baseModel = $this->getModel()->where($this->setWhere($params));
    }

    public function with()
    {
        return $this->baseModel = $this->getModel()->with($this->makeWith());
    }

    protected function error($msg)
    {

        Context::set('error_msg', $msg);
        return false;
    }

    protected function setWhere(array $params)
    {
        return function (Builder $query) use ($params) {
            $this->makeWhere($query, $params);
        };
    }

    public function getError()
    {
        return Context::get('error_msg');
    }


    public function __get($name)
    {

    }

}


