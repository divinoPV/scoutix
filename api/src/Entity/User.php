<?php

namespace App\Entity;

use App\Beable\Entity\Addressable;
use App\Beable\Entity\Birthdable;
use App\Beable\Entity\Blameable;
use App\Beable\Entity\Communicable;
use App\Beable\Entity\Emailable;
use App\Beable\Entity\Genderable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Nameable;
use App\Beable\Entity\Passwordable;
use App\Beable\Entity\Roleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Uploadable;
use App\Beable\Entity\Usernameable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Useract;
use App\Repository\Usertory;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Ramsey\Uuid\Uuid;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ApiResource]
#[ORM\Entity(repositoryClass: Usertory::class)]
#[UniqueEntity(fields: ['email'], message: 'user.unique.email')]
class User implements Useract
{
    use Addressable, Birthdable, Blameable, Communicable, Emailable, Genderable, Idable, LifeCycleable, Nameable, Passwordable, Roleable, Timestampable, Uploadable, Usernameable, Uuidable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'author', targetEntity: Event::class)]
        private Collection $events = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'author', targetEntity: News::class)]
        private Collection $news = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'user', targetEntity: ScopeUser::class)]
        private Collection $scopeUsers = new ArrayCollection
    ) {
        $this->uuid = Uuid::uuid6();
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

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    public function getFullName(): string
    {
        return
            $this->firstName
            . (null !== $this->middleName ? ' ' . $this->middleName : '')
            . (null !== $this->thirdName ? ' ' . $this->thirdName : '')
            . ' ' . $this->patronym
            . (null !== $this->matronym ? ' ' . $this->matronym : '')
            . (null !== $this->maidenName ? ' ' . $this->maidenName : '')
        ;
    }
}
