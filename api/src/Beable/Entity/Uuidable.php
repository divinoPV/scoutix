<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Doctrine\UuidOrderedTimeGenerator;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Serializer\Annotation\Groups;

trait Uuidable
{
    #[Groups(["read"])]
    #[ORM\Column(type: Types::STRING, unique: true)]
    protected UuidInterface|string|null $uuid = null;

    public function getUuid(): ?string
    {
        return $this->uuid;
    }
}
