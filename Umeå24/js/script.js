/*
Diyar Parwana
2022-02-24
Labb 4 A
Finns det frågor??
Tele: 0767031328
diyar.parwana@gmail.com
*/

// Följane är för bootstrap drop down button
// Koden finns färdig, kommer med bootstrap 5
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

// Funktionen är för att öppna en popup window
function chooseImage() {
window.open("files.php", "_blank", "location=no, directories=no, status=no, menubar=no,toolbar=no,scrollbars=yes,resizable=no,top=100,left=500,width=900,height=680");
}

// Funktionen kommer att hämta bilden från den popup filen, files.php
// När bilden från filen klickas, då placeras bilden i en textfält som har nmanet id=image-1
function setvalue(imgid) {
console.log(window.opener);
window.opener.document.getElementById('image-1').value = imgid;
window.close();
}




// Den här funktionen kommer att göra om textarea med namnet id=content, till en rich text editor
window.onload = function() {
// Referense till content elementet
  var element = document.getElementById("content");
  // Om content elementet finns på sidan.
  if(typeof(element) != 'undefined' && element != null){
  CKEDITOR.replace('content');
  }


// Följande är för att automatisk, kopiera text från summery elementet till tags elementet
   var summery = document.getElementById("summery");
         var dst = document.getElementById("tags");
   if(typeof(summery) != 'undefined' && summery != null){ // om summery är inte identifierat...
     summery.addEventListener('input', function() {
      let text = summery.value;
     const myArray = text.split(" ");
       dst.value = myArray;
         });
     };
   }
 
// Följande funktion är för att hitta en text sträng från sidan
// Används i textfilen, files.php
function hittaBild(strang) {
    if (window.find(strang)) {

    }
}
