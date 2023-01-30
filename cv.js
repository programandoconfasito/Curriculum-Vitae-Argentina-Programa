/*const viewMoreBtn = document.getElementById("view-more-btn");
const skillsList = document.getElementById("skills").querySelector("ul");
*/

/*viewMoreBtn.addEventListener("click", function() {
  if (skillsList.style.display === "none") {
    skills } */

/*document.getElementById("mostrar").onclick = function() {
  document.getElementById("skills").style.display = 'none';
}

*/
/*
document.getElementById("boton").addEventListener('click',function (){
  document.getElementById('skills').style.display = 'block';
});

document.getElementById("ocultar").addEventListener('click', function (){
  document.getElementById('skills').style.display = 'none';
})
*/

let seccionVisible = false;

document.getElementById("boton").addEventListener('click', function(){
    if(seccionVisible){
        document.getElementById('skills').style.display = 'none';
        seccionVisible = false;
    } else {
        document.getElementById('skills').style.display = 'block';
        seccionVisible = true;
    }
});