<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SkinController;
use Illuminate\Support\Facades\Route;

Route::get('/',[SkinController::class, 'index']);
Route::post('/',[SkinController::class, 'index']);

Route::get('/login',[AuthController::class, 'showLoginForm'])->name('login');
Route::get('/register',[AuthController::class, 'showRegisterForm'])->name('register');

Route::get('skins/{item?}',[SkinController::class, 'show']);
