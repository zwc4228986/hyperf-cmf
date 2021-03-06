<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
return [
    'scan' => [
        'collectors' => [
            \Yj\Apidog\AnnotationCollector::class,
        ],
        'paths' => [
            BASE_PATH . '/app',
            BASE_PATH . '/yj',
        ],
        'ignore_annotations' => [
            'mixin',
            'User',
            'Date',
            'Notes',
            'PostApi',
            'ApiController',
            'Hyperf\Apidog\Annotation\ApiController',
            'Hyperf\Apidog\Annotation\PostApi',
            'Hyperf\Apidog\Annotation\FormData',
            'Hyperf\Apidog\Annotation\GetApi',
            'day',
            'time'
        ],
    ],
];
