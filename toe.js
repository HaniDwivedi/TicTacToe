let container = document.querySelector(".container");
let play = document.querySelectorAll(".box");


 let turn ="0";
   

 play.forEach((box) => {
    box.addEventListener('click',()=>{ 
        
        if(box.innerText===""){if(turn==0){
        box.innerText="O";
       turn =1;}
        else {
            box.innerText="X";
          turn =0;
        }}
       
        checkwin();
       
        
         })
       } )
let wincondn =[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
  ];
  play.disable=true;
let winner = document.querySelector(".champ");
   
 var checkwin=()=>{

   for( var pattern of wincondn){ 
   
    let value_1 =play[pattern[0]].innerText;
    let value_2 =play[pattern[1]].innerText;
    let value_3 =play[pattern[2]].innerText;
    if( value_1!= "" &&value_2 !=""&& value_3 ){
      
        if (  value_1  ==  value_2 &&value_2 ==  value_3)
    {
      winner.innerText = `Winner is: ${value_1}`; // Update the UI with the winner

  
        
console.log("winner");
play.disable=false;
return;
}

    
    }
   }

   }
  
  let restart = document.querySelector(".resetbtn");
  
  
  
  restart.addEventListener( 'click',( )=>{
    play.forEach((box) => {
    
        
         box.innerText=" ";
         
       } )
        console.log("player want to restart game .");
        
        winner.innerText=" ";
        turn=0;

    }
    
    
  )

  
  
  
  
  
  
  
       /*
wincondn.forEach((winner)=> {
   winner.innerText= "y";
;

}
)8*/














// let modebtn =  document.querySelector("#mode");

// // let currmode="light";


// // modebtn.addEventListener("click",()=>{
// //       if  (currmode=="light"){
// //         currmode="dark";
// //         document.querySelector("body").classList.add("dark");
// //         document.querySelector("body").classList.remove("light");


// //       }
// //       else{
// //         currmode="light";
// //         document.querySelector("body").classList.add("light");
// //         document.querySelector("body").classList.remove("dark");

// //       }
// //       console.log(currmode)
    
// // });
// 
//  wincode.player1.alert("player 1 wins");
//  wincode.player2.alert("player 2 wins");*/

   
// letplayes  = document.querySelectorAll(".box");
// console.log(boxes);

// boxes.forEach(
//     function box.addEventlistener("click",()=>{
//         box.innerText("abc");
//     })
// );

