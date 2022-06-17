<?php

namespace App\Controller\Global;

use App\Ancestor\Controller\Jsoncestor;
use App\Contract\Controller\Jsonact;
use App\Dispenser\Checker;
use App\Entity\Activity;
use App\Entity\AuthorizationActivityFeature;
use App\Entity\Feature;
use App\Enum\Http\Methodum;
use App\Enum\SerializeFormatum;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/authorizations')]
class Authorizationoller extends Jsoncestor implements Jsonact
{
    public const KEY_TRANS = 'authorizationoller';
    public const KEY_ROLE = self::KEY_TRANS . '.role';
    public const KEY_CATEGORY = self::KEY_TRANS . '.category';
    public const KEY_ROLE_RESPONSE = self::KEY_ROLE.'.response';
    public const KEY_CATEGORY_RESPONSE = self::KEY_CATEGORY.'.response';

    public const KEY_ROLE_RESPONSES = [
        'add' => [
            'success' => self::KEY_ROLE_RESPONSE . '.add.success',
            'error' => self::KEY_ROLE_RESPONSE . '.add.error',
        ],
        'anonymize' => [
            'success' => self::KEY_ROLE_RESPONSE . '.anonymize.success',
            'error' => [
                'default' => self::KEY_ROLE_RESPONSE . '.anonymize.error',
                'empty' => self::KEY_ROLE_RESPONSE . '.anonymize.empty',
            ],
        ],
    ];

    #[Route('/roles', methods: [Methodum::GET])]
    public function allRoles(): JsonResponse
    {
        return new JsonResponse($this->serializer->serialize(
            $this->entityManager->getRepository(AuthorizationActivityFeature::class)->findAll(),
            SerializeFormatum::JSON,
        ),
        Response::HTTP_ACCEPTED,
        self::HEADER);
    }

    #[Route('/roles/add', methods: [Methodum::POST])]
    public function addRole(Request $request): JsonResponse
    {
        [
            'activity' => $activity,
            'feature' => $feature,
        ] = (array) json_decode($request->getContent(), false, 512, JSON_THROW_ON_ERROR);

        try {
            $this->entityManager->persist((new AuthorizationActivityFeature())
                ->setActivity($this->entityManager->getRepository(Activity::class)->find($activity->id))
                ->setFeature($this->entityManager->getRepository(Feature::class)->find($feature->id))
            );
            $this->entityManager->flush();

            return new JsonResponse(
                $this->serializer->serialize(
                    $this->translator->trans(self::KEY_ROLE_RESPONSES['add']['success']),
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_ACCEPTED,
                self::HEADER,
            );
        } catch (\Exception $exception) {
            return new JsonResponse(
                $this->serializer->serialize(
                    $this->translator->trans(self::KEY_ROLE_RESPONSES['add']['error']),
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_BAD_REQUEST,
                self::HEADER,
            );
        }
    }

    #[Route('/roles/anonymize', methods: [Methodum::PATCH])]
    public function anonymizeRole(Request $request): JsonResponse
    {
        [
            'activity' => $activityId,
            'feature' => $featureId,
        ] = (array) json_decode($request->getContent(), false, 512, JSON_THROW_ON_ERROR);

        try {
            $authorization = $this->entityManager->getRepository(AuthorizationActivityFeature::class)->findBy([
                'activity' => $activityId,
                'feature' => $featureId,
            ]);

            dump($activityId, $featureId, $authorization);
            if (empty($authorization)) return new JsonResponse(
                $this->serializer->serialize(
                    $this->translator->trans(self::KEY_ROLE_RESPONSES['anonymize']['error']['empty']),
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_ACCEPTED,
                self::HEADER,
            );

            $this->entityManager->remove($authorization[0]);
            $this->entityManager->flush();

            return new JsonResponse(
                $this->serializer->serialize(
                    $this->translator->trans(self::KEY_ROLE_RESPONSES['anonymize']['success']),
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_ACCEPTED,
                self::HEADER,
            );
        } catch (\Exception $exception) {
            dump($exception->getMessage());

            return new JsonResponse(
                $this->serializer->serialize(
                    $this->translator->trans(self::KEY_ROLE_RESPONSES['anonymize']['error']['default']),
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_ACCEPTED,
                self::HEADER,
            );
        }
    }
}
