<?php

namespace App\Entity;

use App\Beable\Entity\Idable;
use App\Beable\Entity\Nameable;
use App\Beable\Entity\Sluggable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\Roletory;

#[ORM\Entity(repositoryClass: Roletory::class)]
class Role
{
    use Idable, Nameable, Sluggable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'role', targetEntity: User::class)]
        private Collection $users  = new ArrayCollection
    ) {
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setRole($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user) && $user->getRole() === $this) {
            $user->setRole(null);
        }

        return $this;
    }
}
