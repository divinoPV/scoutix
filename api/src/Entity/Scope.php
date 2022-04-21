<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Scopeact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Scopetory;
use Ramsey\Uuid\Uuid;

#[ApiResource]
#[ORM\Entity(repositoryClass: Scopetory::class)]
class Scope implements Scopeact
{
    use Idable, Uuidable, LifeCycleable, Timestampable, Blameable;

    #[ORM\ManyToOne(targetEntity: Activity::class, inversedBy: 'scopes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Activity $activity;

    #[ORM\ManyToOne(targetEntity: Locality::class, inversedBy: 'scopes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Locality $locality;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'scope', targetEntity: ScopeUser::class)]
        private Collection $scopeUsers = new ArrayCollection
    ) {
        $this->uuid = Uuid::uuid6();
    }

    public function getActivity(): ?Activity
    {
        return $this->activity;
    }

    public function setActivity(?Activity $activity): static
    {
        $this->activity = $activity;

        return $this;
    }

    public function getLocality(): ?Locality
    {
        return $this->locality;
    }

    public function setLocality(?Locality $locality): static
    {
        $this->locality = $locality;

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
            $scopeUser->setScope($this);
        }

        return $this;
    }

    public function removeScopeUser(ScopeUser $scopeUser): static
    {
        if ($this->scopeUsers->removeElement($scopeUser) && $scopeUser->getScope() === $this) {
            $scopeUser->setScope(null);
        }

        return $this;
    }
}
