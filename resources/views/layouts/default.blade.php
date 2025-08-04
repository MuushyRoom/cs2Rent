<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>cs2Rent</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/css/header.css', 'resources/js/header.js'])
</head>

<body>
    <header class="header">
        <h1 class="header__title">cs2Rent</h1>

        <x-navbar>

        </x-navbar>
    </header>
    <nav class="hide" id="subheader_list_container">

        <ul class="subheader__skin-types" id="subheader__skin-types">
          
        </ul>

    </nav>
    <main>
        @yield('mainContainer')


    </main>
    <footer>

    </footer>
</body>

</html>
