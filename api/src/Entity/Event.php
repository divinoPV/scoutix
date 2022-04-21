<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Contentable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Mediable;
use App\Beable\Entity\Periodable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Eventact;
use App\Enum\PublicationStatum;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Eventory;
use Ramsey\Uuid\Uuid;

#[ApiResource]
#[ORM\Entity(repositoryClass: Eventory::class)]
class Event implements Eventact
{
    use Blameable, Contentable, Idable, LifeCycleable, Mediable, Periodable, Timestampable, Titleable, Uuidable;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'events')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author;

    #[ORM\ManyToOne(targetEntity: EventCategory::class, inversedBy: 'events')]
    #[ORM\JoinColumn(nullable: false)]
    private ?EventCategory $category;

    #[ORM\ManyToOne(targetEntity: Locality::class, inversedBy: 'events')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Locality $locality;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false, enumType: PublicationStatum::class)]
    private ?PublicationStatum $state;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'event', targetEntity: EventInvitation::class)]
        private Collection $eventInvitations = new ArrayCollection
    ) {
        $this->uuid = Uuid::uuid6();
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

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

    public function getLocality(): ?Locality
    {
        return $this->locality;
    }

    public function setLocality(?Locality $locality): static
    {
        $this->locality = $locality;

        return $this;
    }

    public function getState(): ?PublicationStatum
    {
        return $this->state;
    }

    public function setState(?PublicationStatum $state): static
    {
        $this->state = $state;

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
            $eventInvitation->setEvent($this);
        }

        return $this;
    }

    public function removeEventInvitation(EventInvitation $eventInvitation): static
    {
        if ($this->eventInvitations->removeElement($eventInvitation) && $eventInvitation->getEvent() === $this) {
            $eventInvitation->setEvent(null);
        }

        return $this;
    }
}
