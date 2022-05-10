<?php

namespace App\Repository;

use App\Entity\EventCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventCategory[]    findAll()
 * @method EventCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class EventCategorytory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventCategory::class);
    }

    public function findAvailable()
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.deleted = :val')
            ->setParameter('val', false)
            ->getQuery()
            ->getResult()
        ;
    }
}
