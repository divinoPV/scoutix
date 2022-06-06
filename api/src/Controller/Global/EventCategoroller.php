<?php

namespace App\Controller\Global;

use App\Ancestor\Controller\Jsoncestor;
use App\Contract\Controller\Jsonact;
use App\Enum\Http\Methodum;
use App\Repository\EventCategotory;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/event_categories')]
final class EventCategoroller extends Jsoncestor implements Jsonact
{
    #[Route('/available', methods: [Methodum::GET])]
    public function available(EventCategotory $eventCategotory): array
    {
        return $eventCategotory->findAvailable();
    }
}
