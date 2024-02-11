// :D


/* Code func */
const myfunc = () => {
    var ab;
    do {
        ab = window.prompt("Enter your code");
        if (ab === null) {
            return;
        }
    } while (ab != 1969);

    window.alert("Correct number entered!");
};

  /* Changing background according to user */  
        const secondfunc = () => {
            let abcd = window.prompt("Enter the color you want to apply to this page ^_^.\nThe colors are: Yellow, Red, and Purple and if you want to revert it back, type default",); // 2nd "" is default value

            if (abcd === "Yellow") {
                document.body.style.backgroundColor = "yellow";
            } else if (abcd === "Red") {
                document.body.style.backgroundColor = "red";
            } else if (abcd === "Purple") {
                document.body.style.backgroundColor = "Purple";
            } else if(abcd === "default"){
                document.body.style.backgroundColor = "white"
            }
            
            
            else {
                alert("Invalid color! Please choose from Yellow, Red, or Black.");
            }
        };
        

/*Snake, Water and Gun Game */

const swg = ()=>{
let again=true;
while(again){
let random = Math.floor(Math.random() * 3) + 1;
switch (random) {
  case 1:
    random = 'snake';
    break;
  case 2:
    random = 'water';
    break;
  case 3:
    random = 'gun';
    break;
}
let user= window.prompt("Enter either Snake or Water or Gun");
if(random===user){
  alert(`Its a Draw\n Computer: ${random}\n User: ${user}`);
}
else if((random==='snake' && user==='water') || (random==='water' && user==='gun') || (random==='g' && user==='s')){
  alert(`Sorry! You Lost\n Computer: ${random}\n User: ${user}`);
}
else if((random==='snake' && user==='gun') || (random==='water' && user==='snake') || (random==='g' && user==='w')){
  alert(`Congratulations! You Won\n Computer: ${random}\n User: ${user}`);
}
  again= confirm('Do u want to play again');
}
}
