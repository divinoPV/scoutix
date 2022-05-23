<?php

namespace App\Controller\Global;

use App\Repository\Scopetory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ScopeController extends AbstractController
{
    public function __invoke(Scopetory $repoScope)
    {
        return $repoScope->findAvailable();
    }
}
