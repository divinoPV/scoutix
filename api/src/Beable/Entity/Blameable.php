<?php

namespace App\Beable\Entity;

use App\Entity\User;
use App\Enum\Onum;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

trait Blameable
{
    #[Gedmo\Blameable(on: Onum::CHANGE, field: 'archived')]
    #[ORM\JoinColumn(referencedColumnName: 'id', onDelete: 'SET NULL')]
    #[ORM\ManyToOne(targetEntity: User::class, cascade: ['persist', 'remove'])]
    protected ?User $archivedBy = null;

    #[Gedmo\Blameable(on: Onum::CREATE)]
    #[ORM\JoinColumn(referencedColumnName: 'id', onDelete: 'SET NULL')]
    #[ORM\ManyToOne(targetEntity: User::class, cascade: ['persist', 'remove'])]
    protected ?User $createdBy = null;

    #[Gedmo\Blameable(on: Onum::CHANGE, field: 'deleted')]
    #[ORM\JoinColumn(referencedColumnName: 'id', onDelete: 'SET NULL')]
    #[ORM\ManyToOne(targetEntity: User::class, cascade: ['persist', 'remove'])]
    protected ?User $deletedBy = null;

    #[Gedmo\Blameable(on: Onum::UPDATE)]
    #[ORM\JoinColumn(referencedColumnName: 'id', onDelete: 'SET NULL')]
    #[ORM\ManyToOne(targetEntity: User::class, cascade: ['persist', 'remove'])]
    protected ?User $updatedBy = null;

    public function getArchivedBy(): ?User
    {
        return $this->archivedBy;
    }

    public function setArchivedBy(?User $archivedBy): static
    {
        $this->archivedBy = $archivedBy;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): static
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getDeletedBy(): ?User
    {
        return $this->deletedBy;
    }

    public function setDeletedBy(?User $deletedBy): static
    {
        $this->deletedBy = $deletedBy;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updatedBy;
    }

    public function setUpdatedBy(?User $updatedBy): static
    {
        $this->updatedBy = $updatedBy;

        return $this;
    }
}
