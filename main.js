function counting() {
try { var count_new = localStorage.getItem('count');
if (isNaN(count_new)==true) {var count1 = 1; localStorage.setItem('count', count1); document.getElementById('counters').innerHTML=count1;}
else {
  var count_digt = Number(count_new); 
  var count1 = count_digt + 1; 
  localStorage.setItem('count', count1); 
  document.getElementById('counters').innerHTML=count1;}
 } catch(e) { if (e.name == "NS_ERROR_FILE_CORRUPTED") {document.getElementById('counters').innerHTML="Sorry, it looks like your browser storage has been corrupted.";}
}
}

function naviinfo() {
var navi3;
let navi = navigator.userAgent;
let navi1=navigator.platform;
//document.getElementById('navi').innerHTML=navi;
document.getElementById('navi1').innerHTML=navi1;

if (navigator.userAgent.toLowerCase().includes('edg')) {var navi3="Edge";}
else if (navigator.userAgent.toLowerCase().includes('msie')) {var navi3="Internet Explorer";}
else if (navigator.userAgent.toLowerCase().includes('yabrowser')) {var navi3="Yandex Browser";}
else if (navigator.userAgent.toLowerCase().includes('opr')) {var navi3="Opera";}
else if (navigator.userAgent.toLowerCase().includes('firefox')) {var navi3="Firefox";}
else if (navigator.userAgent.toLowerCase().includes('chrome')) {var navi3="Chrome";}
else if (navigator.userAgent.toLowerCase().includes('safari')) {var navi3="Safari";}
else {var navi3="Other browser";}
document.getElementById('navi').innerHTML=navi3;
}

function DisplayTime() {
var dt = new Date();
var dtt=new Intl.DateTimeFormat("ru", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
//var dpp = new Intl.DateTimeFormat().format(date)
//var dt1 = dtt+"  "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
document.getElementById('disptime').innerHTML=dtt.format(dt);
}
