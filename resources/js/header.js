const headerItemContainer = document.getElementById("header_skins_selection");
const subHeaderItemContainer = document.getElementById("subheader_list_container");
const skinCategories = {
 pistol: ["USP-S", "P2000", "Five-SeveN", "Glock-18", "Tec-9", "CZ75-Auto", "Desert Eagle", "P250", "Dual Berettas", "R8 Revolver"],
  smg: ["MP9", "MAC-10", "MP7", "MP5-SD", "P90", "PP-Bizon", "UMP-45"],
  rifle: ["AK-47", "M4A1-S", "M4A4", "FAMAS", "Galil AR", "AUG", "SG 553"],
  sniper: ["AWP", "SSG 08", "SCAR-20", "G3SG1"],
  shotgun: ["Nova", "XM1014", "MAG-7", "Sawed-Off"],
  heavy: ["Negev", "M249"],
  knives: ["Karambit", "Butterfly Knife", "Bayonet", "M9 Bayonet", "Flip Knife", "Huntsman Knife", "Shadow Daggers", "Bowie Knife", "Falchion Knife", "Classic Knife"]
};

console.log(headerItemContainer);
console.log(subHeaderItemContainer);

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


function renderSkinTypes(type) {   
const itemContainer = document.getElementById('subheader__skin-types');    
switch (type){

       case "knives":
             
              skinCategories.knives.map((item)=>{
                const uriValue = item.trim().toLowerCase();     
                itemContainer.innerHTML += `
                <li><a href="knives/${uriValue}">${item}</a></li>
                `;   
              });
       break;




}
}
