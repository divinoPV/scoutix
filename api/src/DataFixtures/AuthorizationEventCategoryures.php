<?php

namespace App\DataFixtures;

use App\Entity\AuthorizationEventCategory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class AuthorizationEventCategoryures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'authorization_event_category_';

    public const NUMBER_ELEMENT = 5;

    protected function generate(ObjectManager $manager): void
    {
        $this->createFromRange(AuthorizationEventCategory::class, Activityures::NUMBER_ELEMENT, function (AuthorizationEventCategory $authorizationEventCategory, int $i) {
            $authorizationEventCategory
                ->setActivity($this->getReference(Activityures::REFERENCE.$i))
                ->setCategory($this->randReference(EventCategoryures::class))
                ->setDefault(60 <= \random_int(0, 100))
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Activityures::class,
            EventCategoryures::class,
            Userures::class,
        ];
    }
}
