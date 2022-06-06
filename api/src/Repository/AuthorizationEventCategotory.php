<?php

namespace App\Repository;

use App\Entity\AuthorizationEventCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AuthorizationEventCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method AuthorizationEventCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method AuthorizationEventCategory[]    findAll()
 * @method AuthorizationEventCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class AuthorizationEventCategotory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AuthorizationEventCategory::class);
    }
}
