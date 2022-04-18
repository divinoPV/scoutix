<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Nameable;
use App\Beable\Entity\Sluggable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Uuidable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\Activitytory;

#[ORM\Entity(repositoryClass: Activitytory::class)]
class Activity
{
    use Blameable, Idable, LifeCycleable, Nameable, Sluggable, Timestampable, Uuidable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'activity', targetEntity: AuthorizationActivityFeature::class)]
        private Collection $authorizationActivityFeatures = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'activity', targetEntity: AuthorizationEventCategory::class)]
        private Collection $authorizationEventCategories = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'recipientActivity', targetEntity: EventInvitation::class)]
        private Collection $eventInvitations = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'activity', targetEntity: Scope::class)]
        private Collection $scopes = new ArrayCollection,
    ) {
    }

    /**
     * @return Collection<int, AuthorizationActivityFeature>
     */
    public function getAuthorizationActivityFeatures(): Collection
    {
        return $this->authorizationActivityFeatures;
    }

    public function addAuthorizationActivityFeature(AuthorizationActivityFeature $authorizationActivityFeature): static
    {
        if (!$this->authorizationActivityFeatures->contains($authorizationActivityFeature)) {
            $this->authorizationActivityFeatures[] = $authorizationActivityFeature;
            $authorizationActivityFeature->setActivity($this);
        }

        return $this;
    }

    public function removeAuthorizationActivityFeature(AuthorizationActivityFeature $authorizationActivityFeature): static
    {
        if ($this->authorizationActivityFeatures->removeElement($authorizationActivityFeature)
            && $authorizationActivityFeature->getActivity() === $this
        ) {
            $authorizationActivityFeature->setActivity(null);
        }

        return $this;
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
            $authorizationEventCategory->setActivity($this);
        }

        return $this;
    }

    public function removeAuthorizationEventCategory(AuthorizationEventCategory $authorizationEventCategory): static
    {
        if ($this->authorizationEventCategories->removeElement($authorizationEventCategory)
            && $authorizationEventCategory->getActivity() === $this
        ) {
            $authorizationEventCategory->setActivity(null);
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
            $eventInvitation->setRecipientActivity($this);
        }

        return $this;
    }

    public function removeEventInvitation(EventInvitation $eventInvitation): static
    {
        if ($this->eventInvitations->removeElement($eventInvitation)
            && $eventInvitation->getRecipientActivity() === $this
        ) {
            $eventInvitation->setRecipientActivity(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, Scope>
     */
    public function getScopes(): Collection
    {
        return $this->scopes;
    }

    public function addScope(Scope $scope): static
    {
        if (!$this->scopes->contains($scope)) {
            $this->scopes[] = $scope;
            $scope->setActivity($this);
        }

        return $this;
    }

    public function removeScope(Scope $scope): static
    {
        if ($this->scopes->removeElement($scope) && $scope->getActivity() === $this) {
            $scope->setActivity(null);
        }

        return $this;
    }
}
