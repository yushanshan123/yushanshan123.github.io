function showpic(tu)
{
var source=tu.getAttribute("href");
document.getElementById("bottom").setAttribute("src",source);
var text=tu.getAttribute("title");
document.getElementById("description").firstChild.nodeValue=text;
}
function prepareGallery()
{
 if(!document.getElementsByTagName) return false;
 if(!document.getElementById) return false;
 if(!document.getElementsById("imagegallery")) return false;
 var gallery=document.getElementById("imagegallery");
 var links=gallery.getElementsByTagName("a");
 for(var i=0;i<links.length;i++)
 {
   links[i].onclick=function()
                {
                 showpic(this);
                 return false;
                }
 }
}

window.onload=prepareGallery;
