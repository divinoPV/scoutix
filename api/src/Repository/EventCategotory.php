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
final class EventCategotory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventCategory::class);
    }

    public function findAvailable(): array
    {
        return $this->createQueryBuilder('ec')
            ->select('
                ec.archived,
                ec.archivedAt,
                IDENTITY(ec.archivedBy),
                ec.content,
                ec.createdAt,
                IDENTITY(ec.createdBy),
                ec.deleted,
                ec.deletedAt,
                IDENTITY(ec.deletedBy),
                ec.id,
                ec.title,
                ec.updatedAt,
                IDENTITY(ec.updatedBy)
            ')
            ->andWhere('ec.deleted = :deleted')
            ->setParameter('deleted', false)
            ->orderBy('ec.createdAt')
            ->getQuery()
            ->getResult()
        ;
    }
}
