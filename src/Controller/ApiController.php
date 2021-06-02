<?php

declare(strict_types=1);

namespace App\Controller;

use App\Exceptions\ApiInvalidParameterException;
use App\Services\ApiService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Validators\ApiRequestParameterValidator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    private ApiService $apiService;

    private ApiRequestParameterValidator $apiRequestParameterValidator;

    public function __construct(
        ApiService $apiService,
        ApiRequestParameterValidator $apiRequestParameterValidator
    ) {
        $this->apiService = $apiService;
        $this->apiRequestParameterValidator = $apiRequestParameterValidator;
    }

    /**
     * @Route("/api", name="api")
     */
    public function index(Request $request): Response
    {
        $filters = $request->query->all();
        try {
            $this->apiRequestParameterValidator->validate($filters);
        } catch(ApiInvalidParameterException $e) {
            return new Response(
                $e->getMessage(),
                $e->getCode()
            );
        }

        $locationFilter = '';
        $hddFilter = '';
        $ramFilter = [];
        $storageFilter = [];

        if (!empty($filters['location']) && is_numeric($filters['location'])) {
            $locationFilter = (int)$filters['location'];
        }

        if (!empty($filters['hdd']) && is_numeric($filters['hdd'])) {
            $hddFilter = (int)$filters['hdd'];
        }

        if (!empty($filters['ram'])) {
            $ramFilter = explode(',', $filters['ram']);
        }

        if (!empty($filters['storage'])) {
            $storageFilter = explode(',', $filters['storage']);
        }

        if (!empty($filters['page'])) {
            $storageFilter = explode(',', $filters['storage']);
        }

        return $this->json([
            'status' => Response::HTTP_OK,
            'data' => $this->apiService->getServersList(
                $locationFilter,
                $hddFilter,
                $ramFilter,
                $storageFilter,
                $filters['page'] ?? null
            )
        ]);
    }
}
