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

const swg = () => {
    let again = true;
    while (again) {
        let random = Math.floor(Math.random() * 3) + 1;
        let computerChoice;
        switch (random) {
            case 1:
                computerChoice = 'snake';
                break;
            case 2:
                computerChoice = 'water';
                break;
            case 3:
                computerChoice = 'gun';
                break;
        }
        let user = window.prompt("Enter either Snake or Water or Gun").toLowerCase();
        if (random === 1) random = 'snake';
        else if (random === 2) random = 'water';
        else random = 'gun';

        if (random === user) {
            alert(`It's a Draw\nComputer: ${computerChoice}\nUser: ${user}`);
        } else if ((computerChoice === 'snake' && user === 'water') || 
                   (computerChoice === 'water' && user === 'gun') || 
                   (computerChoice === 'gun' && user === 'snake')) {
            alert(`Sorry! You Lost\nComputer: ${computerChoice}\nUser: ${user}`);
        } else {
            alert(`Congratulations! You Won\nComputer: ${computerChoice}\nUser: ${user}`);
        }
        again = confirm('Do you want to play again?');
    }
}

swg();

