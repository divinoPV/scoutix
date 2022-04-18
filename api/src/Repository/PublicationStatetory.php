<?php

namespace App\Repository;

use App\Entity\PublicationState;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PublicationState|null find($id, $lockMode = null, $lockVersion = null)
 * @method PublicationState|null findOneBy(array $criteria, array $orderBy = null)
 * @method PublicationState[]    findAll()
 * @method PublicationState[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class PublicationStatetory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PublicationState::class);
    }
}
