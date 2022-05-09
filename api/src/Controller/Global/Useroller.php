<?php

namespace App\Controller\Global;

use App\Entity\ScopeUser;
use App\Repository\ScopeUsertory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/users')]
final class Useroller extends AbstractController
{
    #[Route('/{id}/scopes', methods: ['POST'])]
    public function scopes(int $id, ScopeUsertory $scopeUsertory): JsonResponse
    {
        return new JsonResponse([
            'scopes' => array_map(
                static fn (ScopeUser $scopeUser) => $scopeUser->getScope()->getId(),
                $scopeUsertory->findByUser($id)
            ),
        ]);
    }
}
