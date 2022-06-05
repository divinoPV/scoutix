<?php

namespace App\Controller\Global;

use App\Ancestor\Controller\Jsoncestor;
use App\Contract\Controller\Jsonact;
use App\Entity\ScopeUser;
use App\Enum\Http\Methodum;
use App\Enum\SerializeFormatum;
use App\Repository\ScopeUsertory;
use App\Repository\Usertory;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/users')]
final class Useroller extends Jsoncestor implements Jsonact
{
    #[Route('/available', methods: [Methodum::GET])]
    public function available(Usertory $usertory): array
    {
        return $usertory->findAvailable();
    }

    #[Route('/{id}/scopes', methods: [Methodum::GET])]
    public function scopes(int $id, ScopeUsertory $scopeUsertory): JsonResponse
    {
        return new JsonResponse(
            $this->serializer->serialize((array_map(
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
            )), SerializeFormatum::JSON),
            Response::HTTP_ACCEPTED,
            self::HEADER,
        );
    }
}
