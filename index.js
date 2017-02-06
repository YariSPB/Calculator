// $(".playXClass").attr("class", "btn btn-primary btn-lg btn-block playXClass disabled");
// $(".playOClass").attr("class", "btn btn-primary btn-lg btn-block playOClass disabled");
// $(".playXClass").attr("class", "btn btn-primary btn-lg btn-block playXClass");
//$(".playOClass").attr("class", "btn btn-primary btn-lg btn-block playOClass");
$(document).ready(function() {
var congrat = "Congrats! Computer Wins!";
var xy = "X"; // current Players choice X or Y  
var opponentXY = "O";
var myWinsCount = 0;
var compWinsCount = 0; 
var drawCount = 0;   
var whoGoesFirst = "Person";
  var i=1; // current step;
  var compI = 1; // current step if comp goes first
var myObj= {
  a1: 0,
  a2: 0,
  a3: 0,
  b1: 0,
  b2: 0,
  b3: 0,
  c1: 0,
  c2: 0,
  c3: 0,
   }

  var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} ;    
 
 var randomEntry = 0; 
  
 $(".playXClass").on("click", function() {
   if (i===1 && compI ===1)
   {xy = "X";
    whoGoesFirst="Person";
   opponentXY = "O";} else{return;}
   
           });
  
  var plugComp = function(var2){
    var str4 = "."+ var2 +"Class";
     myObj[var2] = 2; 
    compI++;
    //alert(compI);
      var delay = setTimeout(function(){
       $(str4).html(opponentXY);  
       
   },800);
 }; // plugComp with delay 
  
  var randomIntoObj = function()
  {
    switch(arguments[0])
        {
      case 1 : myObj.a1 = 2; return "a1";
        break;
       case 2 : myObj.a2 = 2; return "a2";
        break;
        case 3 : myObj.a3 = 2; return "a3";
        break;
        case 4 : myObj.b1 = 2; return "b1";
        break;
        case 5 : myObj.b2 = 2; return "b2";
        break;
        case 6 : myObj.b3 = 2; return "b3";
        break;
        case 7 : myObj.c1 = 2; return "c1";
        break;
        case 8 : myObj.c2 = 2; return "c2";
        break;
        case 9 : myObj.c3 = 2; return "c3";
        break;
    } // switch
    return;
  }; // randomIntoObj
  
  $(".playOClass").on("click", function() {
    if (i===1 && compI ===1){
    xy = "O";
    whoGoesFirst = "Computer";
    opponentXY = "X";
    randomEntry = getRandomInt(1,10);
    $(".test1").html(randomEntry);
    plugComp(randomIntoObj(randomEntry));
    
   } else {return;}   
   $(".playXClass").attr("class", "btn btn-success btn-lg btn-block playXClass disabled");
   $(".playOClass").attr("class", "btn btn-success btn-lg btn-block playOClass disabled");
                });
   
 var disableFunca = function(){
   $(".playXClass").attr("class", "btn btn-success btn-lg btn-block playXClass disabled");
   $(".playOClass").attr("class", "btn btn-success btn-lg btn-block playOClass disabled");
   return;
 };
  
  
var checkWin = function()
  {
   if (
     (myObj.a1 === 1 && myObj.a2 === 1 && myObj.a3 === 1) ||
     (myObj.b1 === 1 && myObj.b2 === 1 && myObj.b3 === 1) ||
     (myObj.c1 === 1 && myObj.c2 === 1 && myObj.c3 === 1) ||
     
     (myObj.a1 === 1 && myObj.b1 === 1 && myObj.c1 === 1) ||
     (myObj.a2 === 1 && myObj.b2 === 1 && myObj.c2 === 1) ||
     (myObj.a3 === 1 && myObj.b3 === 1 && myObj.c3 === 1) ||
     
     (myObj.a1 === 1 && myObj.b2 === 1 && myObj.c3 === 1) ||
     (myObj.a3 === 1 && myObj.b2 === 1 && myObj.c1 === 1)
      )
   {
   
     return true;
   } else {return false;} 
  }; // checkwin
  
   var resetFunca = function(){ 
    var wait = setTimeout(function(){
    whoGoesFirst = "Person";
       xy = "X"; 
      opponentXY = "O";
    $(".compWinsClass").html("0");  
    $(".myWinsClass").html("0");
      $(".drawsClass").html("0");
    $(".resultClass").html("Result"); 
    $(".a1Class").html("");
    $(".a2Class").html("");
    $(".a3Class").html("");
    
    $(".b1Class").html("");
    $(".b2Class").html("");
    $(".b3Class").html("");
    
    $(".c1Class").html("");
    $(".c2Class").html("");
    $(".c3Class").html("");
    i=1;
      compI = 1;
    myObj.a1 = 0;
    myObj.a2 = 0;
    myObj.a3 = 0;
    myObj.b1 = 0;
    myObj.b2 = 0;
    myObj.b3 = 0;
    myObj.c1 = 0;
    myObj.c2 = 0;
    myObj.c3 = 0;
       myWinsCount = 0;
       compWinsCount = 0; 
       drawCount = 0;
    $(".playXClass").attr("class", "btn btn-success btn-lg btn-block playXClass");
    $(".playOClass").attr("class", "btn btn-success btn-lg btn-block playOClass");  
    },1000);
    
  };// var resetfunca
  
  var smallerResetFunca = function(){ 
    var wait = setTimeout(function(){ 
      
    $(".a1Class").html("");
    $(".a2Class").html("");
    $(".a3Class").html("");
    
    $(".b1Class").html("");
    $(".b2Class").html("");
    $(".b3Class").html("");
    
    $(".c1Class").html("");
    $(".c2Class").html("");
    $(".c3Class").html("");
    i=1;
      compI = 1;
    myObj.a1 = 0;
    myObj.a2 = 0;
    myObj.a3 = 0;
    myObj.b1 = 0;
    myObj.b2 = 0;
    myObj.b3 = 0;
    myObj.c1 = 0;
    myObj.c2 = 0;
    myObj.c3 = 0;
     if (whoGoesFirst === "Person"){ 
         xy = "O";
    whoGoesFirst = "Computer";
    opponentXY = "X";
    randomEntry = getRandomInt(1,10);
    $(".test1").html(randomEntry);
    plugComp(randomIntoObj(randomEntry));
      } else {
    xy = "X";
    whoGoesFirst="Person";
    opponentXY = "O";
      }
    
    $(".playXClass").attr("class", "btn btn-success btn-lg btn-block playXClass");
    $(".playOClass").attr("class", "btn btn-success btn-lg btn-block playOClass");  
    
    },2500);
    
  };// var resetfunca


  
var compWinMove= function()  
 {
  if ( myObj.a1===2 && myObj.a2===2  && myObj.a3===0 ) { 
    plugComp("a3");
    
    return true;
  } else if ( myObj.a1===2 && myObj.a3===2  && myObj.a2===0 ) { 
    plugComp("a2");
    return true;
  } else if ( myObj.a1===0 && myObj.a2===2  && myObj.a3===2 ) { 
    plugComp("a1");
    return true;
  } else if ( myObj.b1===2 && myObj.b2===2  && myObj.b3===0 ) { 
    plugComp("b3");
    return true;
  } else if ( myObj.b1===2 && myObj.b2===0  && myObj.b3===2 ) { 
    plugComp("b2");
    return true;
  } else if ( myObj.b1===0 && myObj.b2===2  && myObj.b3===2 ) { 
    plugComp("b1");
    return true;
  } else if ( myObj.c1===2 && myObj.c2===2  && myObj.c3===0 ) { 
    plugComp("c3");
    return true;
  } else if ( myObj.c1===2 && myObj.c2===0  && myObj.c3===2 ) { 
    plugComp("c2");
    return true;
  } else if ( myObj.c1===0 && myObj.c2===2  && myObj.c3===2 ) { 
    plugComp("c1");
    return true;
  } else if ( myObj.a1===2 && myObj.b1===2  && myObj.c1===0 ) {
    plugComp("c1");
    return true;
  } else if ( myObj.a1===2 && myObj.b1===0  && myObj.c1===2 ) { 
    plugComp("b1");
    return true;
  } else if ( myObj.a1===0 && myObj.b1===2  && myObj.c1===2 ) { 
    plugComp("a1");
    return true;
  } else if ( myObj.a2===2 && myObj.b2===2  && myObj.c2===0 ) { 
    plugComp("c2");
    return true;
  } else if ( myObj.a2===2 && myObj.b2===0  && myObj.c2===2 ) { 
    plugComp("b2");
    return true;
  } else if ( myObj.a2===0 && myObj.b2===2  && myObj.c2===2 ) { 
    plugComp("a2");
    return true;
  }else if ( myObj.a3===2 && myObj.b3===2  && myObj.c3===0 ) { 
    plugComp("c3");
    return true;
  } else if ( myObj.a3===2 && myObj.b3===0  && myObj.c3===2 ) { 
    plugComp("b3");
    return true;
  }else if ( myObj.a3===0 && myObj.b3===2  && myObj.c3===2 ) { 
    plugComp("a3");
    return true;
  }else if ( myObj.a1===2 && myObj.b2===2  && myObj.c3===0 ) { 
    plugComp("c3");
    return true;
  }else if ( myObj.a1===2 && myObj.b2===0  && myObj.c3===2 ) { 
    plugComp("b2");
    return true;
  }else if ( myObj.a1===0 && myObj.b2===2  && myObj.c3===2 ) { 
    plugComp("a1");
    return true;
  }else if ( myObj.a3===2 && myObj.b2===2  && myObj.c1===0 ) { 
    plugComp("c1");
    return true;
  }else if ( myObj.a3===2 && myObj.b2===0  && myObj.c1===2 ) { 
    plugComp("b2");
   return true;
  }else if ( myObj.a3===0 && myObj.b2===2  && myObj.c1===2 ) { 
    plugComp("a3");
    return true;
  } else { return false;}
  
}; // compwinmove
  
var compCheckThreat = function() // computer finds and block the threat
{
  if ( myObj.a1===1 && myObj.a2===1  && myObj.a3===0 ) {
    plugComp("a3");
    return true;
  } else if ( myObj.a1===1 && myObj.a3===1  && myObj.a2===0 ) { 
    plugComp("a2");
    return true;
  } else if ( myObj.a1===0 && myObj.a2===1  && myObj.a3===1 ) { 
    plugComp("a1");
    return true;
  } else if ( myObj.b1===1 && myObj.b2===1  && myObj.b3===0 ) { 
    plugComp("b3");
    return true;
  } else if ( myObj.b1===1 && myObj.b2===0  && myObj.b3===1 ) { 
    plugComp("b2");
    return true;
  } else if ( myObj.b1===0 && myObj.b2===1  && myObj.b3===1 ) { 
    plugComp("b1");
    return true;
  } else if ( myObj.c1===1 && myObj.c2===1  && myObj.c3===0 ) { 
    plugComp("c3");
    return true;
  } else if ( myObj.c1===1 && myObj.c2===0  && myObj.c3===1 ) { 
    plugComp("c2");
    return true;
  } else if ( myObj.c1===0 && myObj.c2===1  && myObj.c3===1 ) { 
    plugComp("c1");
    return true;
  } else if ( myObj.a1===1 && myObj.b1===1  && myObj.c1===0 ) { 
    plugComp("c1");
    return true;
  } else if ( myObj.a1===1 && myObj.b1===0  && myObj.c1===1 ) { 
    plugComp("b1");
    return true;
  } else if ( myObj.a1===0 && myObj.b1===1  && myObj.c1===1 ) { 
    plugComp("a1");
    return true;
  } else if ( myObj.a2===1 && myObj.b2===1  && myObj.c2===0 ) { 
    plugComp("c2");
    return true;
  } else if ( myObj.a2===1 && myObj.b2===0  && myObj.c2===1 ) { 
    plugComp("b2");
    return true;
  } else if ( myObj.a2===0 && myObj.b2===1  && myObj.c2===1 ) { 
    plugComp("a2");
    return true;
  }else if ( myObj.a3===1 && myObj.b3===1  && myObj.c3===0 ) { 
    plugComp("c3");
    return true;
  }
  else if ( myObj.a3===1 && myObj.b3===0  && myObj.c3===1 ) { 
    plugComp("b3");
    return true;
  }else if ( myObj.a3===0 && myObj.b3===1  && myObj.c3===1 ) { 
    plugComp("a3");
    return true;
  }else if ( myObj.a1===1 && myObj.b2===1  && myObj.c3===0 ) { 
    plugComp("c3");
    return true;
  }else if ( myObj.a1===1 && myObj.b2===0  && myObj.c3===1 ) { 
    plugComp("b2");
    return true;
  }else if ( myObj.a1===0 && myObj.b2===1  && myObj.c3===1 ) { 
    plugComp("a1");
    return true;
  }else if ( myObj.a3===1 && myObj.b2===1  && myObj.c1===0 ) { 
     plugComp("c1");
    return true;
  }else if ( myObj.a3===1 && myObj.b2===0  && myObj.c1===1 ) { 
    plugComp("b2");
    return true;
  }else if ( myObj.a3===0 && myObj.b2===1  && myObj.c1===1 ) { 
    plugComp("a3");
    return true;
  } else { return false;}
}; // compcheckthreat funca
  
 var checkWinOpportunityComp = function (){
   var arr1 = [
     ["a1","a2","a3"],
     ["b1","b2","b3"],
     ["c1","c2","c3"],
     
     ["a1","b1","c1"],
     ["a2","b2","c2"],
     ["a3","b3","c3"],
     
     ["a1","b2","c3"],
     ["a3","b2","c1"]
              ];
  for (var jj=0; jj<arr1.length;jj++)
  { 
    //
    if (myObj[arr1[jj][0]]!== 1 && myObj[arr1[jj][1]]!== 1 && myObj[arr1[jj][2]]!== 1 )
    {
      for (var zz=0; zz<arr1[jj].length; zz++)
      {
       if (myObj[arr1[jj][zz]]=== 0) 
       {
         myObj[arr1[jj][zz]] = 2;
         compI++;
         
         var str2 = "."+arr1[jj][zz]+"Class"; 
         $(str2).html(opponentXY);
         return true;
       } // if 
      } // for zz loop
    }// if
    
  } // for i loop
   return false;
 }; // checkWinOpportunity
  
var randomEntryComp = function(){
  
  for (var prop in myObj)
         {
           if (myObj[prop] === 0)
           {
             myObj[prop] = 2;
             compI++;
             var str1 = "."+prop+"Class"; 
             $(str1).html(opponentXY);
             return true;
           } // if in for loop
         } // for loop
   return false;
  
}; // randomEntry Funca

  var plugMe = function (var1)
  {
    var str3 = "."+ var1 +"Class";
    
    $(str3).html(xy);
     myObj[var1] = 1;
     i++; 
  }; // plugMe

 
var step5template = function(){
  //alert("final step");
  if (checkWin() === true ) {
    myWinsCount++;
    $(".myWinsClass").html(myWinsCount);
    $(".resultClass").html("I won!"); 
    smallerResetFunca();
    return;
  } 
  else {
    drawCount++;
    $(".drawsClass").html(drawCount);
    $(".resultClass").html("Draw!");
    smallerResetFunca();
  }
  return;              
}; //step5


var routineCompStandard = function (){
  if (checkWin() === true ) {
   // alert("I won");
    myWinsCount++;
    $(".myWinsClass").html(myWinsCount);
    $(".resultClass").html("I won!");
    smallerResetFunca();
    return;
  }
  // computer move
  else if (compWinMove() === true) {
    //alert("Computer won!");
    compWinsCount++;
    $(".compWinsClass").html(compWinsCount);
    $(".resultClass").html("Computer won!");
    smallerResetFunca();
    return;
  }
  else if (compCheckThreat() === true) { 
   return;
  }
  else if (checkWinOpportunityComp() === true ){ 
    return;
  }
 else  {
   randomEntryComp();
 }
  return;
};  // computers routine standard
  
  
var compsAllsteps = function(kexStr){
  if (compI === 2){
          plugMe(kexStr);
           routineCompStandard();
   // alert(compI);
         return;
         } // end 2nd move
      else  if (compI === 3){
          plugMe(kexStr);
           routineCompStandard();
       // alert(compI);
         return;
         } // end 3rd move
      else if (compI === 4){
          plugMe(kexStr);
           routineCompStandard();
       // alert(compI);
         return;
         } // end 4th move 
      else if (compI === 5){
          plugMe(kexStr);
        if (checkWin() === true ) {
   // alert("I won");
    myWinsCount++;
    $(".myWinsClass").html(myWinsCount);
    $(".resultClass").html("I won!");
    smallerResetFunca();
    return;
          } 
        else if (compWinMove() === true) {
    compWinsCount++;
    $(".compWinsClass").html(compWinsCount);
    $(".resultClass").html("Computer won!");
    smallerResetFunca();
    return;
  } else {
    randomEntryComp();
    drawCount++;
   // alert("after draw++");
    $(".drawsClass").html(drawCount);
    $(".resultClass").html("Draw!");
   // alert("Draw");
    smallerResetFunca();
   // alert(compI);
    return;
    }
    
         return;
   } // end 5th move 
  return;
   }; // comp goes fisrts  
  
  
  
  // game one
 //A1___A1___A1___A1___A1___A1___A1___A1___A1___
   $(".a1Class").on("click", function() {
     disableFunca();
     if (myObj.a1 === 0){
       if (whoGoesFirst === "Person"){
       if (i === 1){
        plugMe("a1");
      plugComp("b2");     
        }  // 1st step
      else if (i === 2) // 2nd step
      { 
        plugMe("a1");
        if (myObj.a3 === 1 || myObj.c3 === 1){
         plugComp("a2"); 
         }
        if (compCheckThreat() === true) { return;}
        // fisrt move on edge solutions
          else if (myObj.b3 === 1)
          {
            plugComp("a3");
            return;
          } 
          else if(myObj.c2 === 1){
            plugComp("c1");
            return;
                    }
        return;
      } // 2nd step
       // 3 rd step
       else if (i=== 3){ // 3rd step
         plugMe("a1");
         routineCompStandard();
       } // 3rd step
        // 4th step
       else if(i === 4) // 4th step
       { // 4th step
        plugMe("a1"); 
         routineCompStandard();
         return;
       } // 4th step
       //5th step
       else if(i ===5)
               {
                 plugMe("a1");
                 step5template();
               return;
               } 
         // 5th step
     } // person goes fisrt
       ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
         compsAllsteps("a1");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } else {return;} // meaning plugging same field twice
   });
  
  $(".a3Class").on("click", function() {
    disableFunca();
     if (myObj.a3 === 0){
       if (whoGoesFirst === "Person"){
       if (i === 1){
         plugMe("a3");
         plugComp("b2");  
        }  // 1st step
      else if (i === 2)
      { 
        plugMe("a3");
        if (myObj.a1 === 1 || myObj.c1 === 1){
          plugComp("a2");
         }
        if (compCheckThreat() === true) { return;}
        // fisrt move on edge solutions
          else if (myObj.b1 === 1)
          {
            plugComp("a1");
            return;
          } 
          else if(myObj.c2 === 1){
            plugComp("c3");
            return;
                    }
        // fisrt move on edge solutions
        return;
      } // 2nd step   
       else if (i=== 3){ // 3rd step
         plugMe("a3");
         routineCompStandard();
         return;
       } // 3rd step
        // 4th step
       else if(i === 4) // 4th step
       { 
         plugMe("a3");
         routineCompStandard();
         return;
         //computer move
       } // 4th step
       
       //5th step
       else if(i ===5)
               {
               plugMe("a3");  
                 step5template();
               return;
               } 
         // 5th step
       }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
         compsAllsteps("a3");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } else {return;} // meaning plugging same field twice
   });
  
  $(".c1Class").on("click", function() {
    disableFunca();
     if (myObj.c1 === 0){
       if (whoGoesFirst === "Person"){
       if (i === 1){
         plugMe("c1");
         plugComp("b2");   
     }  // 1st step
      else if (i === 2)
      { //2nd step
        plugMe("c1");
        if (myObj.a1 === 1 || myObj.a3 === 1 ){
          plugComp("b1");
         }
        if (compCheckThreat() === true) { return;}
        // fisrt move on edge solutions
          else if (myObj.a2 === 1)
          {
            plugComp("a1");
            return;
          } 
          else if(myObj.b3 === 1){
            plugComp("c3");
            return;
                    }// fisrt move on edge solutions
      } // 2nd step
       else if (i=== 3){ // 3rd step
                plugMe("c1");
         routineCompStandard();
         return;
       } // 3rd step
        // 4th step
       else if(i === 4) // 4th step
       { // 4th step
         plugMe("c1");
         routineCompStandard();
         return;
       } // 4th step
       //5th step
       else if(i ===5)
               {
                 plugMe("c1");
                 step5template();
               return;
               }  // 5th step
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
  compsAllsteps("c1");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } else {return;} // meaning plugging same field twice
   });
  
  $(".c3Class").on("click", function() {
    disableFunca();
     if (myObj.c3 === 0){
       if (whoGoesFirst === "Person"){
       if (i === 1){
         plugMe("c3");
         plugComp("b2");  
     }  // 1st step
      else if (i === 2)
      { // 2nd step
        plugMe("c3");
        if (compCheckThreat() === true) { return;}
        else if (myObj.a1 === 1 || myObj.a3 === 1 ){ // corner 1st 2nd game
          plugComp("b3");
        } 
          // fisrt move on edge solutions
          else if (myObj.a2 === 1)
          {
            plugComp("a3");
            return;
          } 
          else if(myObj.b1 === 1){
            plugComp("c1");
            return;
                    }// fisrt move on edge solutions
       else {for (var prop in myObj)
         {
           if (myObj[prop] === 0 && prop !== "a2" && prop !== "b3" && prop !== "c2" && prop !== "b1")
           {
             myObj[prop] = 2;
             var str1 = "."+prop+"Class"; 
             $(str1).html(opponentXY);
             return;
           } // if in for loop
         } }// for loop
       return; 
      } // 2nd step
       
       else if (i=== 3){ // 3rd step
         plugMe("c3");
         routineCompStandard();      
        return;
       } // 3rd step
       else if(i === 4) // 4th step
       { // 4th step
         plugMe("c3");
         routineCompStandard();
         return;
       } // 4th step
       //5th step
       else if(i ===5)
               {
                 plugMe("c3");
                 step5template();
               return;
               } 
         // 5th step
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
       compsAllsteps("c3");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } else {return;} // meaning plugging same field twice
   });
  
 $(".a2Class").on("click", function() {
   disableFunca();
     if (myObj.a2 === 0){
       if (whoGoesFirst === "Person"){
     // 1st move
       if (i === 1){ // 1st move
         plugMe("a2");
         plugComp("b2");
       } // 1st move
      else  if (i===2) // 2nd move
       {
         plugMe("a2");
         if (compCheckThreat() === true) { return;} 
         else if (myObj.c1 === 1 || myObj.c3 === 1) {
           plugComp("b1"); 
           return;
         }
         //edge fisrt solutions
         else {
           plugComp("a1");
           return;
         }
         //edge first solutions
         return;
       } // 2nd move  
     else if (i=== 3){ // 3rd step 
             plugMe("a2");
       routineCompStandard();
       return;
       } // 3rd step 
       // 4th step
       else if(i === 4) // 4th step
       { // 4th step
         plugMe("a2");
         routineCompStandard();
         return;
       } // 4th step
       //5th step
       else if(i ===5)
               {
                 plugMe("a2");
                 step5template();
               return;
               } 
         // 5th step
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
     compsAllsteps("a2");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } // if caps
 }); // click onto A2  
 
$(".b1Class").on("click", function() {
  disableFunca();
     if (myObj.b1 === 0){
       if (whoGoesFirst === "Person"){
       // 1st move
       if (i === 1){ // 1st move
         plugMe("b1");
         plugComp("b2");
       } // 1st move
       else if (i===2) // 2nd move
       {
         plugMe("b1");
         if (compCheckThreat() === true) { return;}
         else if (myObj.a3 === 1 || myObj.c3 === 1) {
           plugComp("a2");
           return;
         }
         //edge fisrt solutions
         else {
           plugComp("a1");
           return;
         }//edge first solutions
         return;
       } // 2nd move
       else if (i=== 3){ // 3rd step // just for testing
         plugMe("b1");
         routineCompStandard();
          return;
       } // 3rd step
       else if(i === 4) // 4th step
       { // 4th step
         plugMe("b1");
         routineCompStandard();
         return;
       } // 4th step
//5th step
       else if(i ===5)
               {
                 plugMe("b1");
                 step5template();
               return;
               } // 5th step
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
        compsAllsteps("b1");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } // if caps
 }); // click onto B1  
  
  $(".b2Class").on("click", function() {
    disableFunca();
     if (myObj.b2 === 0){
       if (whoGoesFirst === "Person"){
       // 1st move
       if (i === 1) {
         plugMe("b2");
         plugComp("a1");
         return;
       }
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
         compsAllsteps("b2");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } // if caps
 }); // click onto B2
  
   $(".b3Class").on("click", function() {
     disableFunca();
     if (myObj.b3 === 0){
       if (whoGoesFirst === "Person"){
       // 1st move
       if (i === 1){ // 1st move
         plugMe("b3");
         plugComp("b2");
       } // 1st move
      else if (i===2) // 2nd move
       {
         plugMe("b3");
         if (compCheckThreat() === true) { return;}
        else if (myObj.a1 === 1 || myObj.c1 === 1) {
          plugComp("a2");
          return;
        }
         //edge fisrt solutions
         else { 
           plugComp("a3");
           return;}
         //edge first solutions
         return;
       } // 2nd move     
    // 3rd step
       else if (i=== 3){ // 3rd step // just for testing
         plugMe("b3");
         routineCompStandard();
          return;     
       } // 3rd step
        // 4th step
       else if(i === 4) // 4th step
       { // 4th step
         plugMe("b3");
         routineCompStandard();
         return;
       } // 4th step
       //5th step
       else if(i ===5)
               {
                 plugMe("b3");
                 step5template();
               return;
               } // 5th step
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
        compsAllsteps("b3");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } // if caps
 }); // click onto B3
 
   $(".c2Class").on("click", function() {
     disableFunca();
     if (myObj.c2 === 0){
       if (whoGoesFirst === "Person"){
       // 1st move
       if (i === 1){ // 1st move
         plugMe("c2");
       plugComp("b2");  
       } // 1st move
       else if (i===2) // 2nd move
       {
         plugMe("c2");
         if (compCheckThreat() === true) { return;}
         else if (myObj.a1 === 1 || myObj.a3 === 1) {
           plugComp("b1");
           return;}
         //edge fisrt solutions
         else {
           plugComp("a1"); 
           return;}
         //edge first solutions
         return;
       } // 2nd move
      else if (i=== 3){ // 3rd step // just for testing
        plugMe("c2");
        routineCompStandard();
        return;
       } // 3rd step
        // 4th step
       else if(i === 4) // 4th step
       { // 4th step
         plugMe("c2");
         routineCompStandard();
         return;
       } // 4th step
       //5th step
       else if(i ===5)
               {
                 plugMe("c2");
             step5template();
               return;
               } // 5th step
          }
         ////////////COMPOFIRST>>>>>>>>>>>>
       else{ // computer goes fisrt person is COMPUTER
         compsAllsteps("c2");
         return;
       }// computer goes fisrt
       ////////////COMPOFIRST<<<<<<<<<<<<<
     } // if caps
 }); // click onto C2
  // game one ends

  
  $(".resetClass").on("click",  function()
                      { 
                      resetFunca();
   }); //reset on click
  
} ); //document ready