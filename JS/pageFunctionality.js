function changeLogoPad(){
  var pageSize = window.innerWidth;
  var logoObj = document.getElementById("icon");
  logoObj.style.paddingRight = '50px';
  if (pageSize <= 1700)
  {
    //alert(pageSize)
    logoObj.style.paddingRight = String(pageSize - logoObj.offsetWidth) + 'px';
    document.getElementById("titleBarGrid").style.gridTemplateColumns = '55% 45%';
    document.getElementById("titleBarGrid").style.paddingBottom = '20px';
    //alert(pageSize - logoObj.offsetWidth)
  }else{
    logoObj.style.paddingRight = 40;
    document.getElementById("titleBarGrid").style.gridTemplateColumns = '60% 40%';
    document.getElementById("titleBarGrid").style.paddingBottom = '0px';
  }
}
window.onresize = changeLogoPad
