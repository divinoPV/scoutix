<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Contentablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Entity\Activity;
use App\Entity\Event;
use App\Entity\PublicationState;
use App\Entity\Scope;
use App\Entity\User;

interface EventInvitationact extends Blameablact, Contentablact, Idablact, LifeCycleablact, Timestampablact, Titleablact
{
    public function getEvent(): ?Event;

    public function setEvent(?Event $event): EventInvitationact;

    public function getRecipientUser(): ?User;

    public function setRecipientUser(?User $recipientUser): EventInvitationact;

    public function getRecipientScope(): ?Scope;

    public function setRecipientScope(?Scope $recipientScope): EventInvitationact;

    public function getRecipientActivity(): ?Activity;

    public function setRecipientActivity(?Activity $recipientActivity): EventInvitationact;

    public function getState(): ?PublicationState;

    public function setState(?PublicationState $state): EventInvitationact;
}
