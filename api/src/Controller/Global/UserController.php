<?php

namespace App\Controller\Global;

use App\Repository\Usertory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    public function __invoke(Usertory $repoUser)
    {
        return $repoUser->findAvailable();
    }
}
