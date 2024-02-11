// :D

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
        
