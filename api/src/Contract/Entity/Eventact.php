<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Contentablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Mediablact;
use App\Contract\Beable\Periodablact;
use App\Contract\Beable\Sluggablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Contract\Beable\Uuidablact;

interface Eventact extends Blameablact, Contentablact, Idablact, LifeCycleablact, Mediablact, Periodablact, Sluggablact, Timestampablact, Titleablact, Uuidablact
{

}
