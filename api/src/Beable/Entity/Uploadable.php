<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

trait Uploadable
{
    /** Read https://github.com/doctrine-extensions/DoctrineExtensions/blob/main/doc/uploadable.md */

    #[ORM\Column(type: Types::STRING, nullable: true)]
    #[Gedmo\UploadableFileName]
    protected ?string $name = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    #[Gedmo\UploadableFileMimeType]
    protected ?string $mimeType = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    #[Gedmo\UploadableFilePath]
    protected ?string $path = null;

    #[ORM\Column(type: Types::DECIMAL, nullable: true)]
    #[Gedmo\UploadableFileSize]
    protected ?float $size = null;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getMimeType(): ?string
    {
        return $this->mimeType;
    }

    public function setMimeType(?string $mimeType): static
    {
        $this->mimeType = $mimeType;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(?string $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function getSize(): ?float
    {
        return $this->size;
    }

    public function setSize(?float $size): static
    {
        $this->size = $size;

        return $this;
    }
}
