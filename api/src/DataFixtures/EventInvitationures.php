<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\EventInvitation;
use App\Enum\EventInvitationum;
use App\Enum\Statum;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class EventInvitationures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'event_invitation_';

    public const NUMBER_ELEMENT = 20;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(EventInvitation::class, self::NUMBER_ELEMENT, function (EventInvitation $eventInvitation) {
            $entity = EventInvitationum::random()->value;
            $fixture = 'App\\DataFixtures\\'.(EventInvitationum::Scope->value === $entity
                ? 'Scopures'
                : $entity.'ures'
            );

            $eventInvitation
                ->setContent(Faker::content())
                ->setTitle(Faker::title())
                ->setEvent($this->randReference(Eventures::class))
                ->setRecipientEntity($entity)
                ->setRecipientId($this->randReference($fixture, EventInvitationum::User->value === $entity ? 'user' : null)->getId())
                ->setState(Statum::random())
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Activityures::class,
            Eventures::class,
            Scopures::class,
            Userures::class,
        ];
    }
}
