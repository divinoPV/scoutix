<?php

namespace App\DataFixtures;

use App\Entity\Scope;
use Doctrine\Persistence\ObjectManager;

final class Scopures extends Fixturabs
{
    public const REFERENCE = 'scope_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Scope::class, self::NUMBER_ELEMENT, function (Scope $scope) {
            $scope;
        }, self::REFERENCE);
    }
}
