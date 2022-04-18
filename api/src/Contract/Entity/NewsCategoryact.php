<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Nameablact;
use App\Contract\Beable\Sluggablact;
use App\Contract\Beable\Timestampablact;

interface NewsCategoryact extends Blameablact, Idablact, LifeCycleablact, Nameablact, Sluggablact, Timestampablact
{
}
