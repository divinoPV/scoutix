<?php

namespace App\DataFixtures;

use App\Entity\EventCategory;
use Doctrine\Persistence\ObjectManager;

final class EventCategoryures extends Fixturabs
{
    public const REFERENCE = 'event_category_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(EventCategory::class, self::NUMBER_ELEMENT, function (EventCategory $eventCategory) {
            $eventCategory;
        }, self::REFERENCE);
    }
}
