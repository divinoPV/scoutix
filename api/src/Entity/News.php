<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Contentable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Mediable;
use App\Beable\Entity\Releasable;
use App\Beable\Entity\Sluggable;
use App\Beable\Entity\Tagable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Newsact;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\Newstory;

#[ORM\Entity(repositoryClass: Newstory::class)]
class News implements Newsact
{
    use Blameable, Contentable, Idable, LifeCycleable, Mediable, Releasable, Sluggable, Tagable, Timestampable, Titleable, Uuidable;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'news')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author;

    #[ORM\ManyToOne(targetEntity: NewsCategory::class, inversedBy: 'news')]
    #[ORM\JoinColumn(nullable: false)]
    private ?NewsCategory $category;

    #[ORM\ManyToOne(targetEntity: PublicationState::class, inversedBy: 'news')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PublicationState $state;

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

        return $this;
    }

    public function getCategory(): ?NewsCategory
    {
        return $this->category;
    }

    public function setCategory(?NewsCategory $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getState(): ?PublicationState
    {
        return $this->state;
    }

    public function setState(?PublicationState $state): static
    {
        $this->state = $state;

        return $this;
    }
}
