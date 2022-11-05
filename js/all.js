var result,input,msg,big;
var image = document.createElement("img");



window.onload = function(){
  var msg ="輸入數字開始遊戲";
  document.querySelector('#msg').innerHTML = msg;
  
}


function Define_the_number(){
  document.querySelector("#check").setAttribute("style","display:inline-block;")
  var input = document.querySelector('#num').value; 
  
  var small = 0;
  document.querySelector('#big').innerHTML = document.querySelector('#num').value;
  document.querySelector('#small').innerHTML = small;
  var result = Math.floor(Math.random()*input/2);
  console.log(result);
  console.log(document.querySelector('#num').value+'/'+small+'/'+input);
  document.querySelector("#checknumber").setAttribute("style","display:none;")
  document.querySelector("#bignum").setAttribute("value",document.querySelector('#num').value) ;
   var big = parseFloat(document.querySelector("#bignum").value) ; 
   console.log(big);
   localStorage.setItem('big', big);
   localStorage.setItem('result', result);
   localStorage.setItem('small', small);
 
  
}


function check(){
  var small = localStorage.getItem('small') ;
  var big = localStorage.getItem('big') ;
  var result = localStorage.getItem('result') ;
  var input = document.querySelector('#num').value; 
  
  if(input == ""){
    msg = "輸入空氣?";
    image.setAttribute("src", "image/unnamed.gif");
  }else if (isNaN(input)){
    msg = "打數字阿啊";
    image.setAttribute("src", "image/anger.gif");
  }else if (input == 0){
    msg = "打0是打心酸的嗎XDDDDD";
    image.setAttribute("src", "image/hide.gif");
  }else if(result>input && input < big ){
    msg = '比'+input+'還大';
    small = input;
  }else if(result<input && input > small ){
    msg = '比'+input+'還小';
    big = input;
  }else if (result == input){
    msg = '恭喜你猜對了! 答案是'+result+'。';
    image.setAttribute("src", "image/dance.gif");
  }else if (input <= small || input >= big ){
    msg = '拜託打數字內的啦XDDDDD';
    image.setAttribute("src", "image/CRY.gif");
  }

  console.log("big"+big+'/small'+small+'/input'+input);
  document.querySelector('#msg').innerHTML = msg;
  document.querySelector('#big').innerHTML = big;
  document.querySelector('#small').innerHTML = small;
  document.querySelector("#pict").appendChild(image);

}
