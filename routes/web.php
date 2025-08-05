<?php

use App\Http\Controllers\SkinController;
use Illuminate\Support\Facades\Route;

Route::get('/',[SkinController::class, 'index']);

Route::get('skins/{item?}',[SkinController::class, 'show']);
