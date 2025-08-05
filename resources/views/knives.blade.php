@extends('layouts.default')

@section('main-container')
<p>{{Request::url();}}</p>
        <H1>KNIVES SECTIONS</H1>
        <p>{{{{ $knifeType->knifeType }}}}</p>
    @endsection
