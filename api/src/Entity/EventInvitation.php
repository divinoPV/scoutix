<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Contentable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Contract\Entity\EventInvitationact;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\EventInvitationtory;

#[ORM\Entity(repositoryClass: EventInvitationtory::class)]
class EventInvitation implements EventInvitationact
{
    use Blameable, Contentable, Idable, LifeCycleable, Timestampable, Titleable;

    #[ORM\ManyToOne(targetEntity: Event::class, inversedBy: 'eventInvitations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Event $event;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'eventInvitations')]
    private ?User $recipientUser;

    #[ORM\ManyToOne(targetEntity: Scope::class, inversedBy: 'eventInvitations')]
    private ?Scope $recipientScope;

    #[ORM\ManyToOne(targetEntity: Activity::class, inversedBy: 'eventInvitations')]
    private ?Activity $recipientActivity;

    #[ORM\ManyToOne(targetEntity: PublicationState::class, inversedBy: 'eventInvitations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PublicationState $state;

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(?Event $event): static
    {
        $this->event = $event;

        return $this;
    }

    public function getRecipientUser(): ?User
    {
        return $this->recipientUser;
    }

    public function setRecipientUser(?User $recipientUser): static
    {
        $this->recipientUser = $recipientUser;

        return $this;
    }

    public function getRecipientScope(): ?Scope
    {
        return $this->recipientScope;
    }

    public function setRecipientScope(?Scope $recipientScope): static
    {
        $this->recipientScope = $recipientScope;

        return $this;
    }

    public function getRecipientActivity(): ?Activity
    {
        return $this->recipientActivity;
    }

    public function setRecipientActivity(?Activity $recipientActivity): static
    {
        $this->recipientActivity = $recipientActivity;

        return $this;
    }

    public function getState(): ?PublicationState
    {
        return $this->state;
    }

    public function setState(?PublicationState $state): static
    {
        $this->state = $state;

        return $this;
    }
}
