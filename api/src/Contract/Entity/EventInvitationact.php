<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Contentablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;

interface EventInvitationact extends Blameablact, Contentablact, Idablact, LifeCycleablact, Timestampablact, Titleablact
{

}
