<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Doctrine\UuidOrderedTimeGenerator;
use Ramsey\Uuid\UuidInterface;

trait Uuidable
{
    #[ORM\Column(type: Types::STRING, unique: true)]
    #[ORM\CustomIdGenerator(class: UuidOrderedTimeGenerator::class)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    protected UuidInterface|string|null $uuid = null;

    public function getUuid(): ?string
    {
        return $this->uuid;
    }
}
