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


window.onclick = (e) => {
    const parentElement = document.getElementById("subheader_list_container");

    if (
        e.target.className === "header__navbar-item" ||
        parentElement.contains(e.target)
    ) {
        const clickedElement = e.target;
        subHeaderItemContainer.classList.remove("hide");
        const type = clickedElement.innerText.toLowerCase();
        renderSkinTypes(type);
    } else {
        subHeaderItemContainer.classList.add("hide");
    }
};

const gunContainer = `
  <ul class="subheader__list animate__animated animate__bounceInLeft" id="subheader__gun">
    <li class="subheader__item-gun"><a href="skins/gun/pistol">Pistol</a></li>
    <li class="subheader__item-gun"><a href="skins/gun/smg">SMG</a></li>
    <li class="subheader__item-gun"><a href="skins/gun/rifle">Rifle</a></li>
    <li class="subheader__item-gun"><a href="skins/gun/sniper">Sniper</a></li>
    <li class="subheader__item-gun"><a href="skins/gun/shotgun">Shotgun</a></li>
    <li class="subheader__item-gun"><a href="skins/gun/heavy">Heavy</a></li>
</ul>
`;

const knivesContainer = `
<ul class="subheader__list animate__animated animate__bounceInLeft" id="subheader__knives">
    <li class="subheader__item-knives"><a href="skins/knives/karambit">Karambit</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/butterfly-knife">Butterfly Knife</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/bayonet">Bayonet</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/m9-bayonet">M9 Bayonet</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/flip-knife">Flip Knife</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/huntsman-knife">Huntsman Knife</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/shadow-daggers">Shadow Daggers</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/bowie-knife">Bowie Knife</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/falchion-knife">Falchion Knife</a></li>
    <li class="subheader__item-knives"><a href="skins/knives/classic-knife">Classic Knife</a></li>
</ul>
`;

const agentcontainer = `

<ul class="subheader__list animate__animated animate__bounceInLeft" id="subheader__agent">
    <li class="subheader__item-agent"><a href="skins/agent/terrorist">Terrorist</a></li>
    <li class="subheader__item-agent"><a href="skins/agent/counter-terrorist">Counter Terrorist</a></li>
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
