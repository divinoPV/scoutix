<?php

namespace App\DataFixtures;

use App\Entity\ScopeUser;
use Doctrine\Persistence\ObjectManager;

final class ScopeUserures extends Fixturabs
{
    public const REFERENCE = 'scope_user_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(ScopeUser::class, self::NUMBER_ELEMENT, function (ScopeUser $scopeUser) {
            $scopeUser;
        }, self::REFERENCE);
    }
}
