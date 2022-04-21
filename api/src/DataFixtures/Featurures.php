<?php

namespace App\DataFixtures;

use App\Entity\Feature;
use Doctrine\Persistence\ObjectManager;

final class Featurures extends Fixturabs
{
    public const REFERENCE = 'feature_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Feature::class, self::NUMBER_ELEMENT, function (Feature $feature) {
            $feature;
        }, self::REFERENCE);
    }
}
