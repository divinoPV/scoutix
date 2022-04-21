<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Contentable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Mediable;
use App\Beable\Entity\Releasable;
use App\Beable\Entity\Tagable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Beable\Entity\Uuidable;
use App\Contract\Entity\Newsact;
use App\Enum\PublicationStatum;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Newstory;
use Ramsey\Uuid\Uuid;

#[ApiResource]
#[ORM\Entity(repositoryClass: Newstory::class)]
class News implements Newsact
{
    use Blameable, Contentable, Idable, LifeCycleable, Mediable, Releasable, Tagable, Timestampable, Titleable, Uuidable;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'news')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author;

    #[ORM\ManyToOne(targetEntity: NewsCategory::class, inversedBy: 'news')]
    #[ORM\JoinColumn(nullable: false)]
    private ?NewsCategory $category;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false, enumType: PublicationStatum::class)]
    private ?PublicationStatum $state;

    public function __construct()
    {
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

    public function getCategory(): ?NewsCategory
    {
        return $this->category;
    }

    public function setCategory(?NewsCategory $category): static
    {
        $this->category = $category;

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
}
