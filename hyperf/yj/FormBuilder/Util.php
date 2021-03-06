<?php
/**
 * PHP表单生成器
 *
 * @package  FormBuilder
 * @author   xaboy <xaboy2005@qq.com>
 * @version  2.0
 * @license  MIT
 * @link     https://github.com/xaboy/form-builder
 * @document http://php.form-create.com
 */

namespace Yj\FormBuilder;


use Yj\FormBuilder\Contract\CustomComponentInterface;
use Yj\FormBuilder\Contract\FormComponentInterface;

class Util
{
    public static function isComponent($component)
    {
        return $component instanceof CustomComponentInterface || $component instanceof FormComponentInterface;
    }
}