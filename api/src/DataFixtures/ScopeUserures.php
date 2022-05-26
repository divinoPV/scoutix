<?php

namespace App\DataFixtures;

use App\Entity\ScopeUser;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class ScopeUserures extends Fixturabs implements DependentFixtureInterface
{
    protected function generate(ObjectManager $manager): void
    {
        foreach (range(1, 4) as $i) {
            $this->createFromArray(
                ScopeUser::class,
                ['lauraagss', 'divino', 'spacelocust'],
                function (ScopeUser $scopeUser, string $item) use ($i) {
                    $scopeUser
                        ->setScope($this->getReference(Scopures::REFERENCE.$i))
                        ->setUser($this->getReference(Userures::REFERENCE['admin'].$item.'1'))
                    ;
                },
                lifeCycle: true
            );
        }

        foreach (['admin', 'moderator', 'guest', 'user'] as $type) {
            $this->createFromRange(
                ScopeUser::class,
                Userures::NUMBER_ELEMENT[$type],
                function (ScopeUser $scopeUser, int $i) use ($type) {
                    $scopeUser
                        ->setScope($this->randReference(Scopures::class))
                        ->setUser($this->getReference(Userures::REFERENCE[$type].$i))
                    ;
                },
                lifeCycle: true
            );
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
