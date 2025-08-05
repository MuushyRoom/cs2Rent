<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>cs2Rent</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/css/header.css', 'resources/css/subheader.css', 'resources/js/header.js'])
</head>

<body>
    <header class="header">
        <section>
            
            <h1 class="header__title"><a href="/skins">cs2Rent</a></h1>

            <x-navbar>

            </x-navbar>
        </section>

        <nav class="hide" id="subheader_list_container">


        </nav>
    </header>

    <main>
        @yield('main-container')


    </main>
    <footer>
        <h5>cs2 Skins for rent</h5>
    </footer>
</body>

</html>
