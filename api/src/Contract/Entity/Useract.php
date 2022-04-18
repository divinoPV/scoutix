<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Addressablact;
use App\Contract\Beable\Birthdablact;
use App\Contract\Beable\Communicablact;
use App\Contract\Beable\Genderablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Nameablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Uploadablact;
use App\Contract\Beable\Usernameablact;
use App\Contract\Beable\Uuidablact;

interface Useract extends Addressablact, Birthdablact, Communicablact, Genderablact, Idablact, LifeCycleablact, Nameablact, Timestampablact, Uploadablact, Usernameablact, Uuidablact
{

}
