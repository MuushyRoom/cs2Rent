@php
    $isGuest = false;

@endphp

<header class="header">
    <h1 class="header__title"><a href="/">CS2 SKINS</a></h1>

    <nav class="header__nav">
        <ul class="nav__list-container">
            <li class="list__item"><a href="/skins/knife">Knife Skins</a></li>
            <li class="list__item"><a href="/skins/gun">Gun Skins</a></li>
            <li class="list__item"><a href="/skins/agent">Agent Skins</a></li>
           
        </ul>

        <ul class="nav__list-container">
               @if ($isGuest)
              <li class="list__item"><a class="" href="/wishlists">Wishlists</a></li>
              <li class="list__item"><a class="" href="/transactions">Transactions</a></li>
                 <li class="list__item"><a class="" href="/rentals">Rentals</a></li>
                <li class="list__item"><a class="" href="/account">Account</a></li>
            @else
                <li class="list__item"><a class="btn-login btn-primary" href="{{route('login')}}">Login</a></li>
                <li class="list__item"><a class="btn-register btn-secondary" href="{{route('register')}}">Register</a></li>
            @endif
        </ul>
    </nav>
</header>
