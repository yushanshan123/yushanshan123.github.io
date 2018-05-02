function showpic(tu)
{
var source=tu.getAttribute("href");
document.getElementById("bottom").setAttribute("src",source);
var text=tu.getAttribute("title");
document.getElementById("description").firstChild.nodeValue=text;
}