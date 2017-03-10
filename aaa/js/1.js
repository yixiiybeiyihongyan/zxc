
window.onload=function(){
var aul=document.getElementById("ul");
var alike=document.getElementById("like");
var ainput=aul.getElementsByTagName("input");
var ali=aul.getElementsByTagName("li");

var num=0;
 alike.onclick=function(){
if (alike.checked==true){
for (var i=0;i<ainput.length;i++){
 
  ainput[i].checked=true;
  }
for (var z=0;z<ali.length;z++){

ali[z].style.background="#fff"
}

}else{
for (var j=0;j<ainput.length;j++){
 
  ainput[j].checked=false;

}
for (var z=0;z<ali.length;z++){

ali[z].style.background="lightblue"
}

}

}

for (var i=0;i<ainput.length;i++){
	ainput[i].index=i;
ainput[i].onclick=function(){
var flg=0;
for (var i=0;i<ainput.length;i++){
 flg += Number(ainput[i].checked)
// alert(flg)
 }

 if (flg==ainput.length)
{
	alike.checked=true;
}else{

alike.checked=false;
}




 if (this.checked==true){
 

ali[this.index].style.background="#fff"
 }else{
 
ali[this.index].style.background="lightblue" 
 }
	

 }

}

}

