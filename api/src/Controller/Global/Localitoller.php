<?php

namespace App\Controller\Global;

use App\Ancestor\Controller\Jsoncestor;
use App\Contract\Controller\Jsonact;
use App\Entity\Locality;
use App\Enum\Http\Methodum;
use App\Enum\SerializeFormatum;
use App\Repository\Localitory;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/localities')]
final class Localitoller extends Jsoncestor implements Jsonact
{
    public const KEY_TRANS = 'error.response.localitoller';
    public const KEY_ONLY = self::KEY_TRANS.'.only';
    public const KEY_ONLY_BAD_REQUEST = self::KEY_ONLY.'.bad_request';

    /** TODO: externalise in Ancestor */
    #[Route('/{id}/only', methods: [Methodum::GET])]
    public function only(int $id, Request $request): JsonResponse
    {
        $parameters = $request->query->all();

        if (!array_key_exists('fields', $parameters)) {
            return new JsonResponse(
                $this->serializer->serialize(
                    $this->translator->trans(self::KEY_ONLY_BAD_REQUEST.'.missing_fields'),
                    SerializeFormatum::JSON,
                ),
                Response::HTTP_BAD_REQUEST,
                self::HEADER,
            );
        }

        $fields = explode(',', $parameters['fields']);
        $properties = (new \ReflectionClass(Locality::class))->getProperties();

        foreach ($fields as $field) {
            $valid = false;

            foreach ($properties as $property) {
                if ($property->name === $field) $valid = true;
            }

            if (!$valid) {
                return new JsonResponse(
                    $this->serializer->serialize(
                        $this->translator->trans(self::KEY_ONLY_BAD_REQUEST.'.invalid_field', [
                            '%field%' => $field,
                        ]),
                        SerializeFormatum::JSON,
                    ),
                    Response::HTTP_BAD_REQUEST,
                    self::HEADER,
                );
            }
        }

        return new JsonResponse(
            $this->serializer->serialize(
                $this->entityManager
                    ->getRepository(Locality::class)
                    ->byFields(
                        preg_filter('/^/', Localitory::ALIAS.'.', $fields),
                        $id,
                    ),
                SerializeFormatum::JSON,
            ),
            Response::HTTP_ACCEPTED,
            self::HEADER,
        );
    }
}
