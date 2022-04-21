<?php

namespace App\DataFixtures;

use App\Entity\EventInvitation;
use Doctrine\Persistence\ObjectManager;

final class EventInvitationures extends Fixturabs
{
    public const REFERENCE = 'event_invitation_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(EventInvitation::class, self::NUMBER_ELEMENT, function (EventInvitation $eventInvitation) {
            $eventInvitation;
        }, self::REFERENCE);
    }
}
