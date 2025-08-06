<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController
{
    
    public function showLoginForm(){

         return view('auth.login');
    }

    public function showRegisterForm(){

         return view('auth.register');
    }


}
