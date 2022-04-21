<?php

namespace App\DataFixtures;

use App\Entity\Event;
use Doctrine\Persistence\ObjectManager;

final class Eventures extends Fixturabs
{
    public const REFERENCE = 'event_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Event::class, self::NUMBER_ELEMENT, function (Event $event) {
            $event;
        }, self::REFERENCE);
    }
}
