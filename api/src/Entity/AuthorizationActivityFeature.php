<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Contract\Entity\AuthorizationActivityFeatureact;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AuthorizationActivityFeaturetory;

#[ORM\Entity(repositoryClass: AuthorizationActivityFeaturetory::class)]
class AuthorizationActivityFeature implements AuthorizationActivityFeatureact
{
    use Blameable, LifeCycleable, Timestampable;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: Activity::class, inversedBy: 'authorizationActivityFeatures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Activity $activity;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: Feature::class, inversedBy: 'authorizationActivityFeatures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Feature $feature;

    public function getActivity(): ?Activity
    {
        return $this->activity;
    }

    public function setActivity(?Activity $activity): static
    {
        $this->activity = $activity;

        return $this;
    }

    public function getFeature(): ?Feature
    {
        return $this->feature;
    }

    public function setFeature(?Feature $feature): static
    {
        $this->feature = $feature;

        return $this;
    }
}
