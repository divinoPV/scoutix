<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Contentablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Mediablact;
use App\Contract\Beable\Periodablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Contract\Beable\Uuidablact;
use App\Entity\EventCategory;
use App\Entity\Locality;
use App\Entity\User;
use App\Enum\PublicationStatum;

interface Eventact extends Blameablact, Contentablact, Entityact, Idablact, LifeCycleablact, Mediablact, Periodablact,
                           Timestampablact, Titleablact, Uuidablact
{
    public function getAuthor(): ?User;

    public function setAuthor(?User $author): Eventact;

    public function getCategory(): ?EventCategory;

    public function setCategory(?EventCategory $category): Eventact;

    public function getLocality(): ?Locality;

    public function setLocality(?Locality $locality): Eventact;

    public function getState(): ?PublicationStatum;

    public function setState(?PublicationStatum $state): Eventact;
}
