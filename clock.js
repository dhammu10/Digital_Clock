function time(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = document.getElementById("session");

  if(h >= 12){
    session.innerHTML = "PM";
  }
  else{
    session.innerHTML = "AM";
  }

  if(h > 10){
    h = h -12;
  }

  if(h < 10){
    h = "0" +h;
  }

  if(m < 10){
    m = "0"+m;
  }

  if(s < 10){
    s = "0" + s;
  }

  document.getElementById("hour").innerHTML = h;
  document.getElementById("minits").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}
setInterval(time, 10);