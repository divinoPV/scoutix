<?php

namespace App\DataFixtures;

use App\Entity\Scope;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class Scopures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'scope_';

    public const NUMBER_ELEMENT = 20;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Scope::class, self::NUMBER_ELEMENT, function (Scope $scope) {
            $scope
                ->setActivity($this->randReference(Activityures::class))
                ->setLocality($this->randReference(Localityures::class))
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Activityures::class,
            Localityures::class,
            Userures::class,
        ];
    }
}
