<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\Feature;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class Featurures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'feature_';

    public const NUMBER_ELEMENT = 20;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Feature::class, self::NUMBER_ELEMENT, function (Feature $feature) {
            $feature->setTitle(Faker::title());
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Userures::class,
        ];
    }
}
