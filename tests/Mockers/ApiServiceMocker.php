<?php
declare(strict_types=1);

namespace App\Tests\Mockers;

use App\Services\ApiService;
use PHPUnit\Framework\TestCase;

class ApiServiceMocker extends TestCase
{
    public array $list = [];
    
    public function getApiServiceMock()
    {
        $mock = $this->createMock(ApiService::class);

        $mock->expects(self::any())
        ->method('getServersList')
        ->willReturn($this->list);

        return $mock;
    }
}