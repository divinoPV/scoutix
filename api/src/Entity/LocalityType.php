<?php

namespace App\Entity;

use App\Beable\Entity\Idable;
use App\Beable\Entity\Nameable;
use App\Contract\Entity\LocalityTypeact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\LocalityTypetory;

#[ORM\Entity(repositoryClass: LocalityTypetory::class)]
class LocalityType implements LocalityTypeact
{
    use Idable, Nameable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'type', targetEntity: Locality::class)]
        private Collection $localities = new ArrayCollection
    ) {
    }

    /**
     * @return Collection<int, Locality>
     */
    public function getLocalities(): Collection
    {
        return $this->localities;
    }

    public function addLocality(Locality $locality): static
    {
        if (!$this->localities->contains($locality)) {
            $this->localities[] = $locality;
            $locality->setType($this);
        }

        return $this;
    }

    public function removeLocality(Locality $locality): static
    {
        if ($this->localities->removeElement($locality) && $locality->getType() === $this) {
            $locality->setType(null);
        }

        return $this;
    }
}
