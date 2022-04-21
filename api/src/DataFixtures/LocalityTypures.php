<?php

namespace App\DataFixtures;

use App\Entity\LocalityType;
use Doctrine\Persistence\ObjectManager;

final class LocalityTypures extends Fixturabs
{
    public const REFERENCE = 'locality_type_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(LocalityType::class, self::NUMBER_ELEMENT, function (LocalityType $localityType) {
            $localityType;
        }, self::REFERENCE);
    }
}
