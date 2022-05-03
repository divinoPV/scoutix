<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RefreshTokentory;
use Doctrine\ORM\Mapping as ORM;
use Gesdinet\JWTRefreshTokenBundle\Entity\RefreshToken as BaseRefreshToken;

#[ApiResource]
#[ORM\Entity(repositoryClass: RefreshTokentory::class)]
class RefreshToken extends BaseRefreshToken
{
}
