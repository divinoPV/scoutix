<?php

namespace App\Repository;

use App\Entity\EventInvitation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventInvitation|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventInvitation|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventInvitation[]    findAll()
 * @method EventInvitation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class EventInvitationtory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventInvitation::class);
    }
}
