<?php
declare(strict_types=1);

namespace App\Controller;

use App\Services\ApiService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Exceptions\ApiInvalidParameterException;
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
     * @Route("/api/v1/servers-list", name="api")
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

        return $this->json([
            'status' => Response::HTTP_OK,
            'payload' => $this->apiService->getServersList($filters)
        ]);
    }
}
