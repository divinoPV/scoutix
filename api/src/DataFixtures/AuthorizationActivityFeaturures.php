<?php

namespace App\DataFixtures;

use App\Contract\Entity\Activityact;
use App\Entity\AuthorizationActivityFeature;
use Doctrine\Persistence\ObjectManager;

final class AuthorizationActivityFeaturures extends Fixturabs
{
    public const REFERENCE = 'authorization_activity_feature_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(AuthorizationActivityFeature::class, self::NUMBER_ELEMENT, function (AuthorizationActivityFeature $authorizationActivityFeature) {
            $authorizationActivityFeature
                ->setActivity($this->randReference(Activityures::class))
                ->setFeature($this->randReference(Featurures::class))
            ;
        }, self::REFERENCE, true);
    }
}
