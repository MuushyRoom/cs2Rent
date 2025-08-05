@extends('layouts.default')
@section('title', 'Home Page')
@section('content')
    <h3>Recommended Skins (Knife)</h3>
    <x-items :items="$randomKnifes" />

    <h3>Recommended Skins (Guns)</h3>
    <x-items :items="$randomGunSkins" />

    <h3>Recommended Skins (Gloves)</h3>
    <x-items :items="$randomGloves" />

@endsection
