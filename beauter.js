function showsnackbar(y) {
    var x = document.getElementById(y);
    x.className = x.className.replace("snackbar", "snackbar show");
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function topnav(y) {
    var x = document.getElementById(y);
    if (!x.classList.contains('responsive')) {
        x.className += " responsive";
    } else {
        x.className = x.className.replace("responsive", "");
    }
}

function openmodal(idmodal) {
    var modal = document.getElementById(idmodal);
    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function openimg(imgi, modali) {
    var img = document.getElementById(imgi);
    var modal = document.getElementById(modali);
    var modalImg = modal.getElementsByClassName("modal-content")[0];
    var captionText = modal.getElementsByClassName("caption")[0];
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}


var close = document.getElementsByClassName("-close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function() {
            div.style.display = "none";
            div.style.opacity = "1";
        }, 600);
    }
}


function opentab(tabname, evt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
