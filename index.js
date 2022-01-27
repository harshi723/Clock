setInterval(() => {
  var x = new Date();
  var hr = x.getHours() * 30 + x.getMinutes() / 2;
  var min = x.getMinutes() * 6;
  var sec = x.getSeconds() * 6;
  hour.style.transform = `rotate(${hr}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  second.style.transform = `rotate(${sec}deg)`;
  document.getElementById("one").innerHTML = x.toLocaleTimeString("en-US");
}, 1000);
