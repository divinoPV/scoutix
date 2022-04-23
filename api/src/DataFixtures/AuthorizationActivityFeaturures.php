<?php

namespace App\DataFixtures;

use App\Entity\AuthorizationActivityFeature;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class AuthorizationActivityFeaturures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'authorization_activity_feature_';

    public const NUMBER_ELEMENT = 5;

    protected function generate(ObjectManager $manager): void
    {
        $this->createFromRange(AuthorizationActivityFeature::class, Activityures::NUMBER_ELEMENT, function (AuthorizationActivityFeature $authorizationActivityFeature, int $i) {
            $authorizationActivityFeature
                ->setActivity($this->getReference(Activityures::REFERENCE.$i))
                ->setFeature($this->randReference(Featurures::class))
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Activityures::class,
            Featurures::class,
            Userures::class,
        ];
    }
}
