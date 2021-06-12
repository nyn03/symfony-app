<?php

namespace App\Tests\Mockers;

use App\Services\ApiService;
use PHPUnit\Framework\TestCase;

class ApiServiceMocker extends TestCase
{
    public array $list;
    public array $filters;

    public function getApiServiceMock()
    {
        $mock = $this->createMock(ApiService::class);

        // $mock->expects(self::any())
        // ->method('getServersList')
        // ->with($this->filters)
        // ->willReturn($this->list);

        return $mock;
    }
}