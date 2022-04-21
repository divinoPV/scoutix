<?php

namespace App\DataFixtures;

use App\Entity\Locality;
use Doctrine\Persistence\ObjectManager;

final class Localityures extends Fixturabs
{
    public const REFERENCE = 'locality_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Locality::class, self::NUMBER_ELEMENT, function (Locality $locality) {
            $locality;
        }, self::REFERENCE);
    }
}
