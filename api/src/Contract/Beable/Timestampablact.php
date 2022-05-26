<?php

namespace App\Contract\Beable;

interface Timestampablact
{
    public function getArchivedAt(): ?\DateTimeImmutable;

    public function setArchivedAt(?\DateTimeImmutable $archivedAt): static;

    public function getCreatedAt(): ?\DateTimeImmutable;

    public function setCreatedAt(?\DateTimeImmutable $createdAt): static;

    public function getDeletedAt(): ?\DateTimeImmutable;

    public function setDeletedAt(?\DateTimeImmutable $deletedAt): static;

    public function getUpdatedAt(): ?\DateTimeImmutable;

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static;
}
