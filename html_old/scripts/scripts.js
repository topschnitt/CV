
function load_section(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "sections/"+ id + ".html", false);
    xhttp.send();
    var sectionHtml = xhttp.responseText;
    document.getElementById(id).innerHTML = sectionHtml;
}

function load_background_css(id, bgColor1, bgColor2, fontColor = "#000") {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "styles/background.css", false);
    xhttp.send();
    var backgroundCss = xhttp.responseText;
    var className = "background-" + id;
    backgroundCss = backgroundCss.replaceAll("animated-container", className);
    backgroundCss = backgroundCss.replace("#ffffff", bgColor1);
    backgroundCss = backgroundCss.replace("#419db9", bgColor2);
    backgroundCss = backgroundCss.replace("#000", fontColor);
    const style = document.createElement('style');
    style.innerHTML = backgroundCss;
    document.head.appendChild(style);
    document.getElementById(id).classList.add(className);
}


