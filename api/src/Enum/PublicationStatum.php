<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum PublicationStatum: string
{
    use Trumpable;

    const NAME = 'publication_state';

    case Draft = 'draft';
    case Published = 'published';
}
