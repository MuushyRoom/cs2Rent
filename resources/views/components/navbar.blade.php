@php
    $isGuest = true;
@endphp
<nav class="header__navbar">
    <ul class="header__navbar-list" id="header_skins_selection">
        <li class="header__navbar-item">Knives</li>

        <li class="header__navbar-item">Agent Skins</li>
        <li class="header__navbar-item">Gun Skins</li>
    </ul>
    <ul class="header__navbar-list">
        @if ($isGuest)
            <li class="header__navbar-item"><a class="header__navbar-link" href="/">Login</a></li>
            <li class="header__navbar-item"><a class="header__navbar-link" href="/">Register</a></li>
        @else
            <li class="header__navbar-item"><a class="header__navbar-link" href="">Rented Skins</a></li>
            <li class="header__navbar-item"><a class="header__navbar-link" href="">Account</a></li>
        @endif
    </ul>

</nav>
