'use strict' ;
{
  var warn = document.getElementById(warnbtn);
  var warnmsg = warn.textContent
  var span = 300;

  var flag = 0;
  function disp(){
    if(flag === 0) {
      warn.textContent = "";
      flag = 1;
    } else {
      warn.textContent = warnmsg;
      flag = 0;
    }

    settimeout("disp()", span);
  }
}