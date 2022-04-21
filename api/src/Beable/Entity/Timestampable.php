<?php

namespace App\Beable\Entity;

use App\Enum\Onum;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

trait Timestampable
{
    #[Groups(["read", "write"])]
    #[Gedmo\Blameable(on: Onum::CHANGE, field: 'archived')]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $archivedAt = null;

    #[Groups(["read", "write"])]
    #[Gedmo\Blameable(on: Onum::CREATE)]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $createdAt = null;

    #[Groups(["read", "write"])]
    #[Gedmo\Blameable(on: Onum::CHANGE, field: 'deleted')]
    #[ORM\Column(nullable: true)]
    protected ?\DateTimeImmutable $deletedAt = null;

    #[Groups(["read", "write"])]
    #[Gedmo\Blameable(on: Onum::UPDATE)]
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
