const headerItemContainer = document.getElementById("header_skins_selection");
const subHeaderItemContainer = document.getElementById(
    "subheader_list_container"
);

const skinCategories = {
    gunSkins: [
        "pistol",
        "smg",
        "rifle",
        "sniper",
        "shotgun",
        "heavy",
        "knife",
        "grenade",
    ],
    knives: [
        "Karambit",
        "Butterfly Knife",
        "Bayonet",
        "M9 Bayonet",
        "Flip Knife",
        "Huntsman Knife",
        "Shadow Daggers",
        "Bowie Knife",
        "Falchion Knife",
        "Classic Knife",
    ],
};

// CHECK IF A USER CLICKED A LIST ITEM ON  THE NAVBAR
headerItemContainer.addEventListener("click", function (e) {
    const clickedElement = e.target;

    if (clickedElement.tagName === "LI") {
        subHeaderItemContainer.classList.remove("hide");
        const type = clickedElement.innerText.toLowerCase();
        renderSkinTypes(type);
    } else {
        subHeaderItemContainer.classList.add("hide");
    }
});

const gunContainer = `
  <ul class="subheader__list" id="subheader__gun">
    <li class="subheader__item-gun"><a href="gun/pistol">Pistol</a></li>
    <li class="subheader__item-gun"><a href="gun/smg">SMG</a></li>
    <li class="subheader__item-gun"><a href="gun/rifle">Rifle</a></li>
    <li class="subheader__item-gun"><a href="gun/sniper">Sniper</a></li>
    <li class="subheader__item-gun"><a href="gun/shotgun">Shotgun</a></li>
    <li class="subheader__item-gun"><a href="gun/heavy">Heavy</a></li>
</ul>
`;

const knivesContainer = `
<ul class="subheader__list" id="subheader__knives">
    <li class="subheader__item-knives"><a href="knives/karambit">Karambit</a></li>
    <li class="subheader__item-knives"><a href="knives/butterfly-knife">Butterfly Knife</a></li>
    <li class="subheader__item-knives"><a href="knives/bayonet">Bayonet</a></li>
    <li class="subheader__item-knives"><a href="knives/m9-bayonet">M9 Bayonet</a></li>
    <li class="subheader__item-knives"><a href="knives/flip-knife">Flip Knife</a></li>
    <li class="subheader__item-knives"><a href="knives/huntsman-knife">Huntsman Knife</a></li>
    <li class="subheader__item-knives"><a href="knives/shadow-daggers">Shadow Daggers</a></li>
    <li class="subheader__item-knives"><a href="knives/bowie-knife">Bowie Knife</a></li>
    <li class="subheader__item-knives"><a href="knives/falchion-knife">Falchion Knife</a></li>
    <li class="subheader__item-knives"><a href="knives/classic-knife">Classic Knife</a></li>
</ul>
`;

const agentcontainer = `

<ul class="subheader__list" id="subheader__agent">
    <li class="subheader__item-agent"><a href="agent/terrorist">Terrorist</a></li>
    <li class="subheader__item-agent"><a href="agent/counter-terrorist">Counter Terrorist</a></li>
</ul>

`;

function renderSkinTypes(type) {
    console.log(type);

    switch (type) {
        case "knives":
          subHeaderItemContainer.innerHTML = knivesContainer;
            break;
        case "gun skins":
            subHeaderItemContainer.innerHTML = gunContainer;
            break;
        case "agent skins":
          subHeaderItemContainer.innerHTML = agentcontainer;
            break;
    }
}
