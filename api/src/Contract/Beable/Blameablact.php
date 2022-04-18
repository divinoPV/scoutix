<?php

namespace App\Contract\Beable;

use App\Entity\User;

interface Blameablact
{
    public function getArchivedBy(): ?User;

    public function setArchivedBy(?User $archivedBy): Blameablact;

    public function getCreatedBy(): ?User;

    public function setCreatedBy(?User $createdBy): Blameablact;

    public function getDeletedBy(): ?User;

    public function setDeletedBy(?User $deletedBy): Blameablact;

    public function getUpdatedBy(): ?User;

    public function setUpdatedBy(?User $updatedBy): Blameablact;
}
