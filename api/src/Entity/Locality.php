<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Localityact;
use App\Enum\LocalityTypum;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Localitory;
use Ramsey\Uuid\Uuid;

#[ApiResource]
#[ORM\Entity(repositoryClass: Localitory::class)]
class Locality implements Localityact
{
    use Blameable, Idable, LifeCycleable, Timestampable, Titleable, Uuidable;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false, enumType: LocalityTypum::class)]
    private ?LocalityTypum $type;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'locality', targetEntity: Event::class)]
        private Collection $events = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'locality', targetEntity: Scope::class)]
        private Collection $scopes = new ArrayCollection,
    ) {
        $this->uuid = Uuid::uuid6();
    }

    public function getType(): ?LocalityTypum
    {
        return $this->type;
    }

    public function setType(?LocalityTypum $type): static
    {
        $this->type = $type;

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
            $event->setLocality($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): static
    {
        if ($this->events->removeElement($event) && $event->getLocality() === $this) {
            $event->setLocality(null);
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
            $scope->setLocality($this);
        }

        return $this;
    }

    public function removeScope(Scope $scope): static
    {
        if ($this->scopes->removeElement($scope) && $scope->getLocality() === $this) {
            $scope->setLocality(null);
        }

        return $this;
    }
}
