function hideMaterials() {
    var materialContainer = document.getElementById("menu_list");
    var materials = materialContainer.querySelectorAll(".materials");

    // Hide materials
    for (var i = 0; i < materials.length; i++) {
        materials[i].style.visibility = "hidden";
        materials[i].style.fontSize = "0";
        materials[i].style.padding = "0";
    }
}

function showMaterials() {
    var materialContainer = document.getElementById("menu_list");
    var materials = materialContainer.querySelectorAll(".materials");

    // Show materials
    for (var i = 0; i < materials.length; i++) {
        materials[i].style.visibility = "visible";
        materials[i].style.fontSize = "calc(2.5vw + 1px)";
        materials[i].style.padding = "calc(3vw + 3px)";
    }

    setTimeout(function () {
        hideMaterials();
    }, 5000);
}

