<?php
declare (strict_types=1);
namespace App\Model\Admin;

use App\Model\Model;
use Hyperf\Database\Model\Events\Saving;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Redis\Redis;
use Hyperf\Database\Model\SoftDeletes;

class Admin extends Model
{
    use SoftDeletes;
    /**
     * @Inject()
     * @var Redis
     */
    protected $redis;
    protected $table = 'system_admin';
    protected $token_pre = 'Admin:';
    protected $primaryKey= 'id';


    protected $fillable = [
        'roles',
        'id',
        'account',
        'phone',
        'password',
        'status'
    ];


    public function creating()
    {
        $this->due_time = time()+7*3600*24;
    }


    protected $casts = [
        'id' => 'int',
        'status' => 'integer',
        'is_admin' => 'integer',
        'is_default_pass' => 'integer',
        'value' => 'integer',
    ];

    const USER_ENABLE = 1;

    const USER_DISABLE = 0;

    public static $status = [
        self::USER_DISABLE => '禁用',
        self::USER_ENABLE => '启用',
    ];


    public function getDueTimeAttribute($value){
        return date('Y-m-d H:i',(int)$value);
    }

    public function getLastTimeAttribute($value){
        return date('Y-m-d H:i',(int)$value);
    }

    public function getRoles($admin_id){
        return $this->where('id',$admin_id)->value('roles');
    }

    public function role(){
        return $this->hasOne(Roles::class,'id','roles');
    }
    public function get_token($uid)
    {
        //生成随机树
        $token = time() . rand(10000, 9999999) . $uid;
        $this->redis->set($this->token_pre. $token, $uid);
        return $token;
    }

    public function getCreateTimeAttribute($value)
    {
        return date('Y-m-d H:i',(int)$value);
    }
    public function check_token($token)
    {
        p($this->token_pre . $token);
        if (!$this->redis->exists($this->token_pre . $token)) {
            return false;
        }
        $uid = $this->redis->get($this->token_pre . $token);
        return $uid;
    }

    public function setRolesAttribute($value)
    {
        return implode(',', $value);
    }

    public function getRealnameAttribute($value)
    {
        return $value ?: $this->username;
    }
}
