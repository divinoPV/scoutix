<?php

namespace App\DataFixtures;

use App\Entity\PublicationState;
use Doctrine\Persistence\ObjectManager;

final class PublicationStatures extends Fixturabs
{
    public const REFERENCE = 'publication_state_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(PublicationState::class, self::NUMBER_ELEMENT, function (PublicationState $publicationState) {
            $publicationState;
        }, self::REFERENCE);
    }
}
