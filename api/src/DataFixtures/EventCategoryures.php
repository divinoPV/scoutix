<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\EventCategory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class EventCategoryures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'event_category_';

    public const NUMBER_ELEMENT = 5;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(EventCategory::class, self::NUMBER_ELEMENT, function (EventCategory $eventCategory) {
            $eventCategory
                ->setContent(Faker::content())
                ->setTitle(Faker::title())
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
