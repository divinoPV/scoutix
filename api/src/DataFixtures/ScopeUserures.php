<?php

namespace App\DataFixtures;

use App\Entity\ScopeUser;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class ScopeUserures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'scope_user_';

    public const NUMBER_ELEMENT = 20;

    protected function generate(ObjectManager $manager): void
    {
        foreach (['admin', 'moderator', 'guest', 'user'] as $type) {
            $this->createFromRange(ScopeUser::class, Userures::NUMBER_ELEMENT[$type], function (ScopeUser $scopeUser, int $i) use ($type) {
                $scopeUser
                    ->setScope($this->randReference(Scopures::class))
                    ->setUser($this->getReference(Userures::REFERENCE[$type].$i))
                ;
            }, self::REFERENCE.'_'.$type, true);
        }
    }

    public function getDependencies(): array
    {
        return [
            Scopures::class,
            Userures::class,
        ];
    }
}
