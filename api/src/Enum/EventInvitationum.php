<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum EventInvitationum: string
{
    use Trumpable;

    const NAME = 'event_invitation';

    case User = 'User';
    case Scope = 'Scope';
    case Activity = 'Activity';

    public function namespace(): string
    {
        return 'App\\Entity\\'.$this->value;
    }
}
