<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class SkinController
{
    public function index() {
    $response = Http::withoutVerifying()->get('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json');
    $skins = $response->json();

    // Example: Get all skins where category name is "Rifles"
    $guns = array_filter($skins, function($skin) {
        return isset($skin['category']['name']) && $skin['category']['name'] === 'Rifles' || $skin['category']['name'] === 'Pistol' ||
         $skin['category']['name'] === 'SMGs' 
         || $skin['category']['name'] === 'Heavy';
    });

    $knives = array_filter($skins, function($skin) {
        return isset($skin['category']['name']) && $skin['category']['name'] === 'Knives';
    });

    // You can do the same for other categories, e.g. "Gloves"
    $gloves = array_filter($skins, function($skin) {
        return isset($skin['category']['name']) && $skin['category']['name'] === 'Gloves';
    });

    $random = [];
    $randomKnifes = [];
    $randomGunSkin = [];
    $randomGloves = [];

// GET RANDOM KNIVES FOR KNIVES ARRAY
if (count($knives) > 0) {
    $keys = array_rand($knives, min(20, count($knives)));
    foreach ((array)$keys as $key) {
        $randomKnifes[] = $knives[$key];
    }
}

if (count($guns) > 0) {
    $keys = array_rand($guns, min(20, count($guns)));
    foreach ((array)$keys as $key) {
        $randomGunSkin[] = $guns[$key];
    }
}

if (count($gloves) > 0) {
    $keys = array_rand($gloves, min(20, count($gloves)));
    foreach ((array)$keys as $key) {
        $randomGloves[] = $gloves[$key];
    }
}

    return view('welcome', [
        'randomKnifes'=>$randomKnifes,
        'randomGunSkins'=>$randomGunSkin,
        'randomGloves'=>$randomGloves
    ]);
}

     public function show(string $item ='skins'){
        return view(view: "pages.$item");
    }
}
