<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum Statum: string
{
    use Trumpable;

    const NAME = 'state';

    case Pending = 'pending';
    case Send = 'send';
}
