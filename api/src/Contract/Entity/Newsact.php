<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Contentablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Mediablact;
use App\Contract\Beable\Releasablact;
use App\Contract\Beable\Tagablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Contract\Beable\Uuidablact;
use App\Entity\NewsCategory;
use App\Entity\User;
use App\Enum\PublicationStatum;

interface Newsact extends Blameablact, Contentablact, Entityact, Idablact, LifeCycleablact, Mediablact, Releasablact,
                          Tagablact, Timestampablact, Titleablact, Uuidablact
{
    public function getAuthor(): ?User;

    public function setAuthor(?User $author): Newsact;

    public function getCategory(): ?NewsCategory;

    public function setCategory(?NewsCategory $category): Newsact;

    public function getState(): ?PublicationStatum;

    public function setState(?PublicationStatum $state): Newsact;
}
