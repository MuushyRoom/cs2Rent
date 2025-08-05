<section class="items__container">
    <ul class="items__list-container">
        @foreach ($items as $item)
            <li class="list__item">

                <img class="item__img" src="{{ $item['image'] }}" alt="image of {{$item['name']}}">
                <p class="item__name">{{ $item['name'] }}</p>
            </li>
        @endforeach
    </ul>
</section>
