function random_image(){
 var myimages = new Array();  //배열 생성

 myimages[0] = "toyStory.png";
 myimages[1] = "insideOut.png";
 myimages[2] = "moana.png";
 myimages[3] = "tangled.png";
 myimages[4] = "frozen.png";

 var img = document.getElementById('img');      //targetImg;
 var rand = Math.round( Math.random() * 4);  //0~4값 반환
 document.getElementById("img").src=myimages[rand];
// text내용
 if(rand==0){
   var elem = document.getElementById("test");//.value='넣을 문자0';
   elem.innerText=" ToyStory 3 (2010):\n동심으로 돌아가고 \n싶은 그대를 위해!";
 }
 else if(rand==1){
   var ele2= document.getElementById("test");//.value='넣을 문자1';
   elem2.innerText="InSideOut (2013):\n 상상력이 필요한 \n 그대를 위해!"
 }
 else if (rand==2) {
   var ele3= document.getElementById("test");//.value='넣을 문자2';
   ele3.innerText="Moana (2018): \n 바다가 보고 싶은 \n그대를 위해!";
 }
 else if (rand=3) {
  var ele4= document.getElementById("test");//.value='넣을 문자3';
  ele4.innerText="Tangled (2016):\n 도전이 필요한\n 그대를 위해!";
 }
 else{
  var ele5= document.getElementById("test");//.value='넣을 문자4';
  ele5.innerText="Frozen2 (2020):\n 화려한 영상이 보고싶은 \n 그대를 위해!";
 }
}

function drawImage() {
var sel = document.getElementById("movies");
var img = document.getElementById("movieImg");
img.src = sel.options[sel.selectedIndex].value;
}
