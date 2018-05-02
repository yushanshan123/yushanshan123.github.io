function popUp(winURL){
  window.open(winURL,"popup","width=320,height=480");}

window.onload=function(){
  if(!document.getElementsByTagName) return false;
  var lnks=document.getElementsByTagName("a");
  for(var i=0;i<lnks.length;i++){
      lnks[i].onlick=function(){
        popUp(this.getAttribute("href"));
        return false;
        }
      }
    }