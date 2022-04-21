<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Contract\Entity\ScopeUseract;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ScopeUsertory;

#[ApiResource]
#[ORM\Entity(repositoryClass: ScopeUsertory::class)]
class ScopeUser implements ScopeUseract
{
    use Blameable, LifeCycleable, Timestampable;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: Scope::class, inversedBy: 'scopeUsers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Scope $scope;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'scopeUsers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user;

    public function getScope(): ?Scope
    {
        return $this->scope;
    }

    public function setScope(?Scope $scope): static
    {
        $this->scope = $scope;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
