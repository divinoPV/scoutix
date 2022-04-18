<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Timestampable
{
    #[Gedmo\Blameable(on: 'change', field: 'archived')]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $archivedAt = null;

    #[Gedmo\Blameable(on: 'create')]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $createdAt = null;

    #[Gedmo\Blameable(on: 'change', field: 'deleted')]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $deletedAt = null;

    #[Gedmo\Blameable(on: 'update')]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $updatedAt = null;

    public function getArchivedAt(): ?\DateTimeImmutable
    {
        return $this->archivedAt;
    }

    public function setArchivedAt(?\DateTimeImmutable $archivedAt): static
    {
        $this->archivedAt = $archivedAt;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getDeletedAt(): ?\DateTimeImmutable
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?\DateTimeImmutable $deletedAt): static
    {
        $this->deletedAt = $deletedAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
