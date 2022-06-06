<?php

namespace App\Controller\Global;

use App\Ancestor\Controller\Jsoncestor;
use App\Contract\Controller\Jsonact;
use App\Enum\Http\Methodum;
use App\Repository\Scopetory;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/scopes')]
final class Scopoller extends Jsoncestor implements Jsonact
{
    #[Route('/available', methods: [Methodum::GET])]
    public function __invoke(Scopetory $scopetory): array
    {
        return $scopetory->findAvailable();
    }
}
