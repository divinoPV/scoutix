<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Contentable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Contract\Entity\EventCategoryact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EventCategorytory;

#[ApiResource(
    denormalizationContext: ['groups' => ['write']],
    normalizationContext: ['groups' => ['read']],
)]
#[ORM\Entity(repositoryClass: EventCategorytory::class)]
class EventCategory implements EventCategoryact
{
    use Blameable, Contentable, Idable, LifeCycleable, Timestampable, Titleable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'category', targetEntity: AuthorizationEventCategory::class)]
        private Collection $authorizationEventCategories = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'category', targetEntity: Event::class)]
        private Collection $events = new ArrayCollection
    ) {
    }

    /**
     * @return Collection<int, AuthorizationEventCategory>
     */
    public function getAuthorizationEventCategories(): Collection
    {
        return $this->authorizationEventCategories;
    }

    public function addAuthorizationEventCategory(AuthorizationEventCategory $authorizationEventCategory): static
    {
        if (!$this->authorizationEventCategories->contains($authorizationEventCategory)) {
            $this->authorizationEventCategories[] = $authorizationEventCategory;
            $authorizationEventCategory->setCategory($this);
        }

        return $this;
    }

    public function removeAuthorizationEventCategory(AuthorizationEventCategory $authorizationEventCategory): static
    {
        if ($this->authorizationEventCategories->removeElement($authorizationEventCategory)
            && $authorizationEventCategory->getCategory() === $this
        ) {
            $authorizationEventCategory->setCategory(null);
        }

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
            $event->setCategory($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): static
    {
        if ($this->events->removeElement($event) && $event->getCategory() === $this) {
            $event->setCategory(null);
        }

        return $this;
    }
}
