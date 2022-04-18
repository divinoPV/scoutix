<?php

namespace App\Entity;

use App\Beable\Entity\Addressable;
use App\Beable\Entity\Birthdable;
use App\Beable\Entity\Blameable;
use App\Beable\Entity\Communicable;
use App\Beable\Entity\Genderable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Nameable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Uploadable;
use App\Beable\Entity\Usernameable;
use App\Beable\Entity\Uuidable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\Usertory;

#[ORM\Entity(repositoryClass: Usertory::class)]
class User
{
    use Addressable, Birthdable, Blameable, Communicable, Genderable, Idable, LifeCycleable, Nameable, Timestampable, Uploadable, Usernameable, Uuidable;

    #[ORM\ManyToOne(targetEntity: Role::class, inversedBy: 'users')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Role $role;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'author', targetEntity: Event::class)]
        private Collection $events = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'recipientUser', targetEntity: EventInvitation::class)]
        private Collection $eventInvitations = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'author', targetEntity: News::class)]
        private Collection $news = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'user', targetEntity: ScopeUser::class)]
        private Collection $scopeUsers = new ArrayCollection
    ) {
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): static
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Collection<int, Event>
     */
    public function getEvents(): Collection
    {
        return $this->events;
    }

    public function addEvent(Event $event): static
    {
        if (!$this->events->contains($event)) {
            $this->events[] = $event;
            $event->setAuthor($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): static
    {
        if ($this->events->removeElement($event) && $event->getAuthor() === $this) {
            $event->setAuthor(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, EventInvitation>
     */
    public function getEventInvitations(): Collection
    {
        return $this->eventInvitations;
    }

    public function addEventInvitation(EventInvitation $eventInvitation): static
    {
        if (!$this->eventInvitations->contains($eventInvitation)) {
            $this->eventInvitations[] = $eventInvitation;
            $eventInvitation->setRecipientUser($this);
        }

        return $this;
    }

    public function removeEventInvitation(EventInvitation $eventInvitation): static
    {
        if ($this->eventInvitations->removeElement($eventInvitation)
            && $eventInvitation->getRecipientUser() === $this
        ) {
            $eventInvitation->setRecipientUser(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, News>
     */
    public function getNews(): Collection
    {
        return $this->news;
    }

    public function addNews(News $news): static
    {
        if (!$this->news->contains($news)) {
            $this->news[] = $news;
            $news->setAuthor($this);
        }

        return $this;
    }

    public function removeNews(News $news): static
    {
        if ($this->news->removeElement($news) && $news->getAuthor() === $this) {
            $news->setAuthor(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, ScopeUser>
     */
    public function getScopeUsers(): Collection
    {
        return $this->scopeUsers;
    }

    public function addScopeUser(ScopeUser $scopeUser): static
    {
        if (!$this->scopeUsers->contains($scopeUser)) {
            $this->scopeUsers[] = $scopeUser;
            $scopeUser->setUser($this);
        }

        return $this;
    }

    public function removeScopeUser(ScopeUser $scopeUser): static
    {
        if ($this->scopeUsers->removeElement($scopeUser) && $scopeUser->getUser() === $this) {
            $scopeUser->setUser(null);
        }

        return $this;
    }
}
