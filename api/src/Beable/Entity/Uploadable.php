<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;

trait Uploadable
{
    /** Read https://github.com/doctrine-extensions/DoctrineExtensions/blob/main/doc/uploadable.md */

    #[Groups(["read", "write"])]
    #[ORM\Column(type: Types::STRING, nullable: true)]
    #[Gedmo\UploadableFileName]
    protected ?string $fileName = null;

    #[Groups(["read", "write"])]
    #[ORM\Column(type: Types::STRING, nullable: true)]
    #[Gedmo\UploadableFileMimeType]
    protected ?string $fileMimeType = null;

    #[Groups(["read", "write"])]
    #[ORM\Column(type: Types::STRING, nullable: true)]
    #[Gedmo\UploadableFilePath]
    protected ?string $filePath = null;

    #[Groups(["read", "write"])]
    #[ORM\Column(type: Types::DECIMAL, nullable: true)]
    #[Gedmo\UploadableFileSize]
    protected ?float $fileSize = null;

    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileName(?string $fileName): static
    {
        $this->fileName = $fileName;

        return $this;
    }

    public function getFileMimeType(): ?string
    {
        return $this->fileMimeType;
    }

    public function setFileMimeType(?string $fileMimeType): static
    {
        $this->fileMimeType = $fileMimeType;

        return $this;
    }

    public function getFilePath(): ?string
    {
        return $this->filePath;
    }

    public function setFilePath(?string $filePath): static
    {
        $this->filePath = $filePath;

        return $this;
    }

    public function getFileSize(): ?float
    {
        return $this->fileSize;
    }

    public function setFileSize(?float $fileSize): static
    {
        $this->fileSize = $fileSize;

        return $this;
    }
}
