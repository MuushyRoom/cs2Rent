<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});




Route::get('/skins', function () {
    return view('skins');
});

Route::get('/skins/knives/{knifeType}',function($knifeType){
    return view('knives')->with(['knifeType' => $knifeType]);
});

