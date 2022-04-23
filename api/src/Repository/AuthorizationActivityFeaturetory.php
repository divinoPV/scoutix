<?php

namespace App\Repository;

use App\Entity\AuthorizationActivityFeature;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AuthorizationActivityFeature|null find($id, $lockMode = null, $lockVersion = null)
 * @method AuthorizationActivityFeature|null findOneBy(array $criteria, array $orderBy = null)
 * @method AuthorizationActivityFeature[]    findAll()
 * @method AuthorizationActivityFeature[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class AuthorizationActivityFeaturetory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AuthorizationActivityFeature::class);
    }
}
