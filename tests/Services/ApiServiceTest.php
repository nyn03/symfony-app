<?php
declare(strict_types=1);

namespace App\Test\Services;

use App\Services\ApiService;
// use App\Tests\Mockers\ApiServiceMocker;
use PHPUnit\Framework\TestCase;
use App\Tests\Mockers\ServerRepositoryMocker;

class ApiServiceTest extends TestCase
{
    private ServerRepositoryMocker $serverRepoMocker;
    // private ApiServiceMocker $apiServiceMocker;

    protected function setUp(): void 
    {
        $this->serverRepoMocker = new ServerRepositoryMocker();
        // $this->apiServiceMocker = new ApiServiceMocker();
    }

    /** @test */
    public function ItReturnsArray()
    {
        // $this->apiServiceMocker->list = $this->getServersListData();
        // $this->apiServiceMocker->filters = [1,'','','','',1];
        // $apiServiceMock = $this->apiServiceMocker->getApiServiceMock();
        // $result = $apiServiceMock->method('getServersList')
        $apiMock = $this->createMock(ApiService::class);

        $result = $apiMock->expects(self::any())
            ->method('getServersList')
            ->with([1, '', '', '', '', 1])
            ->willReturn([
                [
                    "id" => 4,
                    "server_name" => "RH2288v32x Intel Xeon E5-2650V4",
                    "ram_name" => "128GBDDR4",
                    "hdd_name" => "4x480GBSSD",
                    "location_name" => "AmsterdamAMS-01",
                    "price" => "$227.99"
                ]
            ]);

    }

    /** @test */
    // public function fetchCorrectResultFromRepository()
    // {
    //     $this->serverRepoMocker->list = $this->getServersListData();
    //     $serverRepoMock = $this->serverRepoMocker->getServerRepositoryMock();
    //     $filters = [1,'','','','',1];
    //     $result = $serverRepoMock->getServersList($filters);
        
    //     $this->assertTrue(is_array($result));
    // }
    
    public function getServersListData()
    {
        return [
            [
                "id" => 4,
                "server_name" => "RH2288v32x Intel Xeon E5-2650V4",
                "ram_name" => "128GBDDR4",
                "hdd_name" => "4x480GBSSD",
                "location_name" => "AmsterdamAMS-01",
                "price" => "$227.99"
            ]
        ];
    }
}