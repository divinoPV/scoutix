<?php

namespace App\Entity;

use App\Beable\Entity\Idable;
use App\Beable\Entity\Sluggable;
use App\Beable\Entity\Titleable;
use App\Contract\Entity\PublicationStateact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PublicationStatetory;

#[ORM\Entity(repositoryClass: PublicationStatetory::class)]
class PublicationState implements PublicationStateact
{
    use Idable, Sluggable, Titleable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'state', targetEntity: EventInvitation::class)]
        private Collection $eventInvitations = new ArrayCollection,
        #[ORM\OneToMany(mappedBy: 'state', targetEntity: News::class)]
        private Collection $news = new ArrayCollection
    ) {
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
            $eventInvitation->setState($this);
        }

        return $this;
    }

    public function removeEventInvitation(EventInvitation $eventInvitation): static
    {
        if ($this->eventInvitations->removeElement($eventInvitation) && $eventInvitation->getState() === $this) {
            $eventInvitation->setState(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, News>
     */
    public function getNews(): Collection
    {
        return $this->news;
    }

    public function addNews(News $news): static
    {
        if (!$this->news->contains($news)) {
            $this->news[] = $news;
            $news->setState($this);
        }

        return $this;
    }

    public function removeNews(News $news): static
    {
        if ($this->news->removeElement($news) && $news->getState() === $this) {
            $news->setState(null);
        }

        return $this;
    }
}
