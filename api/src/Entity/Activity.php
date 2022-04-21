<?php

namespace App\Entity;


use App\Beable\Entity\Blameable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Activityact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Activitytory;
use Ramsey\Uuid\Uuid;

#[ApiResource]
#[ORM\Entity(repositoryClass: Activitytory::class)]
class Activity implements Activityact
{
    use Blameable, Idable, LifeCycleable, Timestampable, Titleable, Uuidable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'activity', targetEntity: AuthorizationActivityFeature::class)]
        private Collection $authorizationActivityFeatures = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'activity', targetEntity: AuthorizationEventCategory::class)]
        private Collection $authorizationEventCategories = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'activity', targetEntity: Scope::class)]
        private Collection $scopes = new ArrayCollection,
    ) {
        $this->uuid = Uuid::uuid6();
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
