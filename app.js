
var r11=document.getElementById('r11');
var r12=document.getElementById('r12');
var r13=document.getElementById('r13');
var r21=document.getElementById('r21');
var r22=document.getElementById('r22');
var r23=document.getElementById('r23');
var r31=document.getElementById('r31');
var r32=document.getElementById('r32');
var r33=document.getElementById('r33');
var list=[[r11,r12,r13],[r21,r22,r23],[r31,r32,r33]];
for(var i=0;i<list.length;i++){
  for(var j=0;j<list.length;j++){
    list[i][j].style.visibility="hidden";
    list[i][j].addEventListener('click',function(i,j){

    })
  }
}

//document.getElementsByTagName("td").addEventListener("click",bestMove());

var marko="../brackets_node/public/images/o_img.png";

var board=[
  ['_','_','_'],
  ['_','_','_'],
  ['_','_','_']
];
function display( board){
  for(var row=0;row<3;row++){

    console.log(board[row][0],board[row][1],board[row][2]);


}

}

var truex=0;
var truey=0;
function leftMoves (board){
var ans=false;


    for (var i = 0; i<3; i++){
        for (var j = 0; j<3; j++){
            if (board[i][j]=='_'){
              ans=true;
            }

   }

  }
return ans;
}
function evaluate( boardcpy){

for(var row=0;row<3;row++){

  if(boardcpy[row][0] == boardcpy[row][1] && boardcpy[row][1] == boardcpy[row][2]){
if(boardcpy[row][0]=='x'){

    return -10;
  }
else if(boardcpy[row][0]=='o') {


  return +10;
}

  }

}
for(var col=0;col<3;col++){
  if(boardcpy[0][col] == boardcpy[1][col] && boardcpy[1][col] == boardcpy[2][col]){

    if(boardcpy[0][col]=='x'){

    return -10;
  }
  else if(boardcpy[0][col]=='o'){

    return +10;
  }
  }

}

if(boardcpy[0][0]==boardcpy[1][1] && boardcpy[1][1]==boardcpy[2][2]){

  if(boardcpy[0][0]=='x'){

  return -10;
}
else if(boardcpy[0][0]=='o'){

  return +10;}
}

if(boardcpy[0][2]==boardcpy[1][1] && boardcpy[1][1]==boardcpy[2][0]){

if(boardcpy[0][2]=='x'){

  return -10;
}
else if(boardcpy[0][2]=='o'){

  return +10;
}
}

return 0;
}


function minmax(boardcpy,depth,turn){


var eva=evaluate(boardcpy);
if(eva == 10){
  return 10-depth;
}
if(eva == -10){
  return -10+depth;
}
  var check=leftMoves(boardcpy);
  if(check==false){


    return 0;
  }

if(turn==true){
var best = -1000;
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      if(boardcpy[i][j]=='_'){
        boardcpy[i][j]='o';

        best=Math.max(best,minmax(boardcpy,depth+1,!turn));
        boardcpy[i][j]="_";

      }
    }

  }
return best;


}
else if(turn==false){

  var best=1000;
    for(var k=0;k<3;k++){
      for(var l=0;l<3;l++){
        if(boardcpy[k][l]=='_'){
          boardcpy[k][l]='x';

          best=Math.min(best,minmax(boardcpy,depth+1,!turn));
          boardcpy[k][l]="_";

        }
      }

    }
return best;
}




}


function bestMove(boardcpy, turn){
var best= -1000;
for(var i=0;i<3;i++){
for(var j=0;j<3;j++){

if(boardcpy[i][j]=='_'){
  boardcpy[i][j]='o';


var move=minmax(boardcpy,0,turn);
  boardcpy[i][j]='_';

if(move>best){

truex=i;
truey=j;
best=move;


}

}


}

}

boardcpy[truex][truey]='o';

display(boardcpy);

}









var a11=document.getElementById('a11');
var a12=document.getElementById('a12');
var a13=document.getElementById('a13');
var a21=document.getElementById('a21');
var a22=document.getElementById('a22');
var a23=document.getElementById('a23');
var a31=document.getElementById('a31');
var a32=document.getElementById('a32');
var a33=document.getElementById('a33');
var lista=[[a11,a12,a13],[a21,a22,a23],[a31,a32,a33]];


var num=Math.random()
if(num<0.5){
    var i=parseInt((Math.random()*2));
    var j=parseInt((Math.random()*2));
  list[i][j].src=marko;
  list[i][j].style.visibility="visible";
board[i][j]='o';
}


for(var i=0;i<lista.length;i++){
  for(var j=0;j<lista.length;j++){




lista[i][j].onclick=function(ev){
  var row = ev.target.parentElement.rowIndex;
  var col=parseInt(ev.target.id[2])-1;

  list[row][col].style.visibility="visible";
  board[row][col]='x';
  bestMove(board,false);
  list[truex][truey].src=marko;
  list[truex][truey].style.visibility="visible";
  var score=evaluate(board);
  if(score==10){





    for(var i=0;i<lista.length;i++){
      for(var j=0;j<lista.length;j++){
          if(board[i][j]!='_'){
            lista[i][j].style.visibility="visible";
          }

      }
    }
  setTimeout(function(){  alert("you lose!!!");
  location.reload();
},600);

  }
}
  }
}
