<?php

namespace Yj\Watcher;

use Hyperf\Contract\ConfigInterface;
use Yj\Watcher\Driver\ScanFileDriver;

class Options
{
    protected $driver = ScanFileDriver::class;

    protected $bin = "php";

    /**
     * @var string
     */
    protected $command = 'yj/Wather/watcher.php start';


    /**
     * @var string[]
     */
    protected $watchDir = ['app', 'config'];

    /**
     * @var string[]
     */
    protected $watchFile = ['.env'];


    /**
     * @var string[]
     */
    protected $ext = ['.php', '.env'];

    /**
     * @var int
     */
    protected $scanInterval = 2000;

    /**
     * @var bool
     */
    protected $restart = true;

    public function __construct(ConfigInterface $config,  bool $restart = true)
    {
//        $options = $config->get('watcher', []);/**/
//
//        isset($options['driver']) && $this->driver = $options['driver'];
//        isset($options['bin']) && $this->bin = $options['bin'];
//        isset($options['command']) && $this->command = $options['command'];
//        isset($options['watch']['dir']) && $this->watchDir = (array) $options['watch']['dir'];
//        isset($options['watch']['file']) && $this->watchFile = (array) $options['watch']['file'];
//        isset($options['watch']['scan_interval']) && $this->scanInterval = (int) $options['watch']['scan_interval'];
//        isset($options['ext']) && $this->ext = (array) $options['ext'];

//        $this->watchDir = array_unique(array_merge($this->watchDir, $dir));
//        $this->watchFile = array_unique(array_merge($this->watchFile, $file));
        $this->restart = $restart;
    }


    public function getDriver(): string
    {
        return $this->driver;
    }

    public function getBin(): string
    {
        return $this->bin;
    }

    public function getCommand(): string
    {
        return $this->command;
    }

    public function getWatchDir(): array
    {
        return $this->watchDir;
    }

    public function getWatchFile(): array
    {
        return $this->watchFile;
    }

    public function getExt(): array
    {
        return $this->ext;
    }

    public function getScanInterval(): int
    {
        return $this->scanInterval > 0 ? $this->scanInterval : 2000;
    }

    public function isRestart(): bool
    {
        return $this->restart;
    }
}