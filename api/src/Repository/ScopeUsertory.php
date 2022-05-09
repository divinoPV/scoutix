<?php

namespace App\Repository;

use App\Entity\ScopeUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ScopeUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScopeUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScopeUser[]    findAll()
 * @method ScopeUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class ScopeUsertory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ScopeUser::class);
    }

    public function findByUser(int $id): array
    {
        return $this->findBy(['user' => $id]);
    }
}
