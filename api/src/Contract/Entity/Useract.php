<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Addressablact;
use App\Contract\Beable\Birthdablact;
use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Communicablact;
use App\Contract\Beable\Emailablact;
use App\Contract\Beable\Genderablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Nameablact;
use App\Contract\Beable\Passwordablact;
use App\Contract\Beable\Roleablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Uploadablact;
use App\Contract\Beable\Usernameablact;
use App\Contract\Beable\Uuidablact;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

interface Useract extends Addressablact, Birthdablact, Blameablact, Communicablact, Emailablact, Entityact,
                          Genderablact, Idablact, LifeCycleablact, Nameablact, PasswordAuthenticatedUserInterface,
                          Passwordablact, Roleablact, Timestampablact, Uploadablact, Usernameablact, UserInterface,
                          Uuidablact
{
}
