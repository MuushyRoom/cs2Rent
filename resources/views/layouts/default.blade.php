<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
    @vite(['resources/js/app.js','resources/css/items.css','resources/css/main.css', 'resources/css/header.css','resources/css/app.css'])
</head>
<body>
    <x-header/>
        
        <main class="main">
            @yield('content')
        </main>
</body>
</html>