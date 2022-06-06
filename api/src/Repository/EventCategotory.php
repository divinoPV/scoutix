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
    public const ALIAS = 'ec';

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventCategory::class);
    }

    public function findAvailable(): array
    {
        return $this->createQueryBuilder(self::ALIAS)
            ->select(
                self::ALIAS.'.archived,'
               .self::ALIAS.'.archivedAt,'
               .'IDENTITY('.self::ALIAS.'.archivedBy),'
               .self::ALIAS.'.content,'
               .self::ALIAS.'.createdAt,'
               .'IDENTITY('.self::ALIAS.'.createdBy),'
               .self::ALIAS.'.deleted,'
               .self::ALIAS.'.deletedAt,'
               .'IDENTITY('.self::ALIAS.'.deletedBy),'
               .self::ALIAS.'.id,'
               .self::ALIAS.'.title,'
               .self::ALIAS.'.updatedAt,'
               .'IDENTITY('.self::ALIAS.'.updatedBy)'
            )
            ->where(self::ALIAS.'.deleted = :deleted')
            ->setParameter('deleted', false)
            ->orderBy(self::ALIAS.'.createdAt')
            ->getQuery()
            ->getResult()
        ;
    }
}
