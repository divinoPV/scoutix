<?php

namespace App\DataFixtures;

use App\Entity\AuthorizationEventCategory;
use Doctrine\Persistence\ObjectManager;

final class AuthorizationEventCategoryures extends Fixturabs
{
    public const REFERENCE = 'authorization_event_category_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(AuthorizationEventCategory::class, self::NUMBER_ELEMENT, function (AuthorizationEventCategory $authorizationEventCategory) {
            $authorizationEventCategory;
        }, self::REFERENCE);
    }
}
