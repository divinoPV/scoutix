<?php

namespace App\Controller\Global;

use App\Ancestor\Controller\Jsoncestor;
use App\Contract\Controller\Jsonact;
use App\Entity\Activity;
use App\Entity\AuthorizationActivityFeature;
use App\Entity\Feature;
use App\Enum\SerializeFormatum;
use PHPUnit\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/authorizations')]
class Authorizationoller extends Jsoncestor implements Jsonact
{
    #[Route('/roles', methods: ['GET'])]
    public function getAuthorizationRole(): JsonResponse
    {
        return new JsonResponse($this->serializer->serialize(
            [
                'authorizations' => $this->entityManager->getRepository(AuthorizationActivityFeature::class)->findAll(),
                'activities' => $this->entityManager->getRepository(Activity::class)->findAll(),
                'features' => $this->entityManager->getRepository(Feature::class)->findAll(),
            ],
            SerializeFormatum::JSON,
        ),
        Response::HTTP_ACCEPTED,
        self::HEADER);
    }

    #[Route('/roles/add', methods: ['GET'])]
    public function addAuthorizationRole(Request $request): JsonResponse
    {
        dd($request->query['authorizations']);
        try {
            $authorizationRole = new AuthorizationActivityFeature();
            $this->entityManager->persist();
            $this->entityManager->flush();

            return new JsonResponse(
                $this->serializer->serialize(
                    'authorization add successfully',
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_ACCEPTED,
                self::HEADER,
            );
        } catch (Exception $exception) {
            return new JsonResponse(
                $this->serializer->serialize(
                    'authorization add error',
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_BAD_REQUEST,
                self::HEADER,
            );
        }
    }

    #[Route('/roles/{feature}/{activity}', methods: ['GET'])]
    public function deleteAuthorizationRole(Request $request): JsonResponse
    {
        $parameters = $request->query->all();
        dd($request->query);
        return new JsonResponse(
            $this->serializer->serialize(
                $this->entityManager->getRepository(Activity::class),
                self::SERIALIZE_FORMAT,
            ),
            Response::HTTP_ACCEPTED,
            self::HEADER,
        );
    }
}
