<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Sluggablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Contract\Beable\Uuidablact;

interface Activityact extends Blameablact, Idablact, LifeCycleablact, Sluggablact, Timestampablact, Titleablact,
                              Uuidablact
{
}
