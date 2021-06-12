<?php

namespace App\Tests;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ApiControllerTest extends WebTestCase
{
    /** @test */
    public function ItSucceedWithValidURL()
    {
        $client = $this->createClient();

        $client->request(
            Request::METHOD_GET,
            '/api/v1/servers-list',
            [
                'location' => '',
                'hdd' => '',
                'ram' => '',
                'storage' => '',
                'page' => 1,
            ]
        );

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    /** @test */
    public function ItFailsWithInvalidURL()
    {
        $client = $this->createClient();
        $client->catchExceptions(false);
        $this->expectException(NotFoundHttpException::class);
            $client->request(
                Request::METHOD_GET,
                '/api/v1/',
                [
                    'location' => '',
                    'hdd' => '',
                    'ram' => '',
                    'storage' => '',
                    'page' => 1,
                ]
            );

        $this->assertEquals(Response::HTTP_NOT_FOUND, $client->getResponse()->getStatusCode());
    }

    /** @test */
    public function ItFailsWithInvalidParameters()
    {
        $client = $this->createClient();
        $client->request(
            Request::METHOD_GET,
            '/api/v1/servers-list',
            [
                'location' => '',
                'hdd' => '',
                'ram' => '',
                'storage' => '',
                'page' => 0,
            ]
        );

        $this->assertEquals(Response::HTTP_BAD_REQUEST, $client->getResponse()->getStatusCode());
    }
}
