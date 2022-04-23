<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum LocalityTypum: string
{
    use Trumpable;

    const NAME = 'locality_type';

    case Cluster = 'cluster';
    case National = 'national';
    case Territory = 'territory';
    case Unit = 'unit';
}
