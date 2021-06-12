<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController 
{
    public string $apiUrl;
    
    public function __construct(string $apiUrl)
    {
        $this->apiUrl = $apiUrl;
    }

    /**
     * @Route("/")
     */
    public function index() {
        return $this->render('app.html.twig', ['apiUrl' => $this->apiUrl]);
    }
}
