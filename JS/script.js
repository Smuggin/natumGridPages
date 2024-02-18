var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function openmenu(){
    document.getElementById("sidemenus").style.right="0px";
}
function closemenu(){
    document.getElementById("sidemenus").style.right="-200px";
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link") 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")   
    }
    event.currentTarget.classList.add("active-link");
    console.log(tabname)
    document.getElementById(tabname).classList.add("active-tab");
}
$(document).ready(function() {
 $('.icon-001-linkedin-1').on("click",function(){
    console.log("click");
    window.open("https://www.linkedin.com/in/natum-tongiang-41891a263/",'_blank');
 });
 $('.icon-003-facebook-1').on("click",function(){
    console.log("click");
    window.open("https://www.facebook.com/natum.tongiyang",'_blank');
 });
 $('.icon-004-github-1').on("click",function(){
    console.log("click");
    window.open("https://github.com/Smuggin",'_blank');
 });
 });
 function openPage(url){
    window.open(url);
 }