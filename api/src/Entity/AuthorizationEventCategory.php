<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Defaultable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Contract\Entity\AuthorizationEventCategoryact;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AuthorizationEventCategorytory;

#[ORM\Entity(repositoryClass: AuthorizationEventCategorytory::class)]
class AuthorizationEventCategory implements AuthorizationEventCategoryact
{
    use Blameable, Defaultable, LifeCycleable, Timestampable;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: Activity::class, inversedBy: 'authorizationEventCategories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Activity $activity;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: EventCategory::class, inversedBy: 'authorizationEventCategories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?EventCategory $category;

    public function getActivity(): ?Activity
    {
        return $this->activity;
    }

    public function setActivity(?Activity $activity): static
    {
        $this->activity = $activity;

        return $this;
    }

    public function getCategory(): ?EventCategory
    {
        return $this->category;
    }

    public function setCategory(?EventCategory $category): static
    {
        $this->category = $category;

        return $this;
    }
}
