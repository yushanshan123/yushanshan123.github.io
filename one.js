function popUp(winURL){
window.open(winURL,"popup","width=320,height=480");
}
document.getElementsByTagName("a")[0].onclick=function(){
popUp(this.href);return false;
};