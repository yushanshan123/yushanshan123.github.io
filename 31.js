function showpic(tu)
{
var source=tu.getAttribute("href");
var text=tu.getAttribute("title");
var des=document.getElementById("description");
document.getElementById("bottom").setAttribute("src",source);
des.fristchild.nodeValue=text;
}
