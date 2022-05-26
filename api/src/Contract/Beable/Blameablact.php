<?php

namespace App\Contract\Beable;

use App\Entity\User;

interface Blameablact
{
    public function getArchivedBy(): ?User;

    public function setArchivedBy(?User $archivedBy): static;

    public function getCreatedBy(): ?User;

    public function setCreatedBy(?User $createdBy): static;

    public function getDeletedBy(): ?User;

    public function setDeletedBy(?User $deletedBy): static;

    public function getUpdatedBy(): ?User;

    public function setUpdatedBy(?User $updatedBy): static;
}
