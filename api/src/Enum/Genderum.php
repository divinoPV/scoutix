<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum Genderum: string
{
    use Trumpable;

    const NAME = 'gender';

    case Agender = 'agender';
    case Bigender = 'bigender';
    case Female = 'female';
    case Genderfluid = 'genderfluid';
    case Genderqueer = 'genderqueer';
    case Intergender = 'intergender';
    case Male = 'male';
    case Pangender = 'pangender';
    case Transgender = 'transgender';
}
