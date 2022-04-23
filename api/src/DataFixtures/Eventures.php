<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\Event;
use App\Enum\PublicationStatum;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class Eventures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'event_';

    public const NUMBER_ELEMENT = 100;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Event::class, self::NUMBER_ELEMENT, function (Event $event) {
            $event
                ->setContent(Faker::content())
                ->setStartDate(Faker::dateTimeImmutable('now', '+1 year'))
                ->setEndDate(Faker::dateTimeImmutable('now', '+1 year'))
                ->setTitle(Faker::title(10))
                ->setAuthor($this->randReference(Userures::class, 'admin'))
                ->setCategory($this->randReference(EventCategoryures::class))
                ->setLocality($this->randReference(Localityures::class))
                ->setState(PublicationStatum::random())
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            EventCategoryures::class,
            Localityures::class,
            Userures::class,
        ];
    }
}
