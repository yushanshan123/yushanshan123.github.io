function showpic(tu)
{
var source=tu.getAttribute("href");
var text=tu.getAttribute("title");
var description=document.getElementById("description");
document.getElementById("bottom").setAttribute("src",source);
description.fristchild.nodeValue=text;
}
