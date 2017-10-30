function showsnackbar(y) {
    var x = document.getElementById(y);
    x.className = x.className.replace("snackbar", "snackbar show"); 
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function topnav(y) {
            var x = document.getElementById(y);
            if (!x.classList.contains('responsive'))    {
                x.className += " responsive";
            } else {
				x.className = x.className.replace("responsive", "");
            }
        }



var close = document.getElementsByClassName("-close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";       
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}




// Get the modal
var modal = document.getElementById('myModal1');

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementById("modalbox-close1");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}










////iimghbox


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementById("imgclose");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}













//////TABS



var close = document.getElementsByClassName("-close");
var i;

for (i = 0; i < close.length; i++) {
   
    close[i].onclick = function(){

               var div = this.parentElement;

        
        div.style.opacity = "0";

       
        setTimeout(function(){ div.style.display = "none"; div.style.opacity = "1";}, 600);
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
