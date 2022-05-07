<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Contentable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Contract\Entity\EventInvitationact;
use App\Enum\Statum;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EventInvitationtory;

#[ApiResource]
#[ORM\Entity(repositoryClass: EventInvitationtory::class)]
class EventInvitation implements EventInvitationact
{
    use Blameable, Contentable, Idable, LifeCycleable, Timestampable, Titleable;

    #[ORM\ManyToOne(targetEntity: Event::class, inversedBy: 'eventInvitations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Event $event;

    #[ORM\Column(type: Types::STRING, nullable: false)]
    private ?string $recipientEntity;

    #[ORM\Column(type: Types::INTEGER, nullable: false)]
    private ?int $recipientId;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false, enumType: Statum::class)]
    private ?Statum $state;

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(?Event $event): static
    {
        $this->event = $event;

        return $this;
    }

    public function getRecipientEntity(): ?string
    {
        return $this->recipientEntity;
    }

    public function setRecipientEntity(?string $recipientEntity): static
    {
        $this->recipientEntity = $recipientEntity;

        return $this;
    }

    public function getRecipientId(): ?int
    {
        return $this->recipientId;
    }

    public function setRecipientId(?int $recipientId): static
    {
        $this->recipientId = $recipientId;

        return $this;
    }

    public function getState(): ?Statum
    {
        return $this->state;
    }

    public function setState(?Statum $state): static
    {
        $this->state = $state;

        return $this;
    }
}
