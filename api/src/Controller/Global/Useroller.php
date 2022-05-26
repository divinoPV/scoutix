<?php

namespace App\Controller\Global;

use App\Entity\ScopeUser;
use App\Repository\ScopeUsertory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/users')]
final class Useroller extends AbstractController
{
    #[Route('/{id}/scopes', methods: ['GET'])]
    public function scopes(int $id, ScopeUsertory $scopeUsertory, SerializerInterface $serializer): JsonResponse
    {
        return new JsonResponse(
            $serializer->serialize((array_map(
                static fn (ScopeUser $scopeUser) => [
                    'id' => $scopeUser->getScope()?->getId(),
                    'activity' => [
                        'id' => $scopeUser->getScope()?->getActivity()?->getId(),
                        'title' => $scopeUser->getScope()?->getActivity()?->getTitle(),
                    ],
                    'locality' => [
                        'id' => $scopeUser->getScope()?->getLocality()?->getId(),
                        'title' => $scopeUser->getScope()?->getLocality()?->getTitle(),
                    ],
                ],
                $scopeUsertory->findByUser($id),
            )), 'json'),
            Response::HTTP_ACCEPTED,
            ['Content-Type' => "application/json"],
        );
    }
}
