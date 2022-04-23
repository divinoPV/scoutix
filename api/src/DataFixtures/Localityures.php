<?php

namespace App\DataFixtures;

use App\Entity\Locality;
use App\Enum\LocalityTypum;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class Localityures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'locality_';

    public const NUMBER_ELEMENT = 20;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Locality::class, self::NUMBER_ELEMENT, function (Locality $locality) {
            $locality
                ->setTitle($this->faker->city())
                ->setType(LocalityTypum::random())
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Userures::class,
        ];
    }
}
