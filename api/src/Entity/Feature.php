<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Sluggable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Featureact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\Featuretory;
use Ramsey\Uuid\Uuid;

#[ORM\Entity(repositoryClass: Featuretory::class)]
class Feature implements Featureact
{
    use Blameable, Idable, LifeCycleable, Sluggable, Timestampable, Titleable, Uuidable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'feature', targetEntity: AuthorizationActivityFeature::class)]
        private Collection $authorizationActivityFeatures = new ArrayCollection
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
            $authorizationActivityFeature->setFeature($this);
        }

        return $this;
    }

    public function removeAuthorizationActivityFeature(AuthorizationActivityFeature $authorizationActivityFeature): static
    {
        if ($this->authorizationActivityFeatures->removeElement($authorizationActivityFeature)
            && $authorizationActivityFeature->getFeature() === $this
        ) {
            $authorizationActivityFeature->setFeature(null);
        }

        return $this;
    }
}
