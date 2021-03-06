<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Contentablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Entity\Event;
use App\Enum\Statum;

interface EventInvitationact extends Blameablact, Contentablact, Entityact, Idablact, LifeCycleablact, Timestampablact,
                                     Titleablact
{
    public function getEvent(): ?Event;

    public function setEvent(?Event $event): static;

    public function getRecipientEntity(): ?string;

    public function setRecipientEntity(?string $recipientEntity): static;

    public function getRecipientId(): ?int;

    public function setRecipientId(?int $recipientId): static;

    public function getState(): ?Statum;

    public function setState(?Statum $state): static;
}
