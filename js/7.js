function showpic(tu)
{
  var source=tu.getAttribute("href");
  document.getElementById("placeholder").setAttribute("src",source);
  var text=tu.getAttribute("title");
  document.getElementById("description").firstChild.nodeValue=text;
}

function prepareGallery()
{
if(!document.getElementsByTagName) return false;
if(!document.getElementById) return false;
if(!document.getElementById("imagegallery")) return false;
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

function addLoadEvent(func)
{
  var oldnload=window.onload;
  if(typeof window.onload!='function')
  {
    window.onload=func;
  }
  else 
  {
  window.onload=function()
    {
     oldnload();
     func();
    }
  }
}

function insertAfter(newElement,targetElement)
{
 var parent=targetElement.parentNode;
  if(parent.lastChild==targetElement){
   parent.appendChild(newElement);
  }
  else{
  parent.insertBefore(newElement,targetElement.nextSibling);}
}


function preparePlaceholder()
{
  var placeholder=document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","../img/position.jpg");
  placeholder.setAttribute("alt","my image gallery");
  var description=document.createElement("p");
  description.setAttribute("id","description");
  var desctext=document.createTextNode("Choose an image.");
  description.appendChild(desctext);
  var gallery=document.getElementById("imagegallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
