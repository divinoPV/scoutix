<?php

namespace App\Entity;

use App\Beable\Entity\Blameable;
use App\Beable\Entity\Idable;
use App\Beable\Entity\LifeCycleable;
use App\Beable\Entity\Sluggable;
use App\Beable\Entity\Timestampable;
use App\Beable\Entity\Titleable;
use App\Contract\Entity\NewsCategoryact;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\NewsCategorytory;

#[ORM\Entity(repositoryClass: NewsCategorytory::class)]
class NewsCategory implements NewsCategoryact
{
    use Blameable, Idable, LifeCycleable, Sluggable, Timestampable, Titleable;

    public function __construct(
        #[ORM\OneToMany(mappedBy: 'category', targetEntity: News::class)]
        private Collection $news = new ArrayCollection
    ) {
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
            $news->setCategory($this);
        }

        return $this;
    }

    public function removeNews(News $news): static
    {
        if ($this->news->removeElement($news) && $news->getCategory() === $this) {
            $news->setCategory(null);
        }

        return $this;
    }
}
