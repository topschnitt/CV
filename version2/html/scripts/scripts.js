
function load_section(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "sections/"+ id + ".html", false);
    xhttp.send();
    var sectionHtml = xhttp.responseText;
    document.getElementById(id).innerHTML = sectionHtml;
}

function load_background_css(id, bgColor1, bgColor2, fontColor = "#000") {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "styles/general/background.css", false);
    xhttp.send();
    var backgroundCss = xhttp.responseText;
    var className = "background-" + id;
    backgroundCss = backgroundCss.replaceAll("animated-container", className);
    backgroundCss = backgroundCss.replace("#ff0000", bgColor1);
    backgroundCss = backgroundCss.replace("#ff0001", bgColor2);
    backgroundCss = backgroundCss.replace("##ff0002", fontColor);
    const style = document.createElement('style');
    style.innerHTML = backgroundCss;
    document.head.appendChild(style);
    document.getElementById(id).classList.add(className);
}


