let inputBox  = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = ""

buttons.forEach(ele =>{
    ele.addEventListener("click", (btn)=>{
        if(btn.target.innerText == "="){
            try{
                string = String(eval(string))
            }
            catch(error){
                string = "Error"
            }
            //inputBox.value = string
        }
        else if(btn.target.innerText == "C"){
            string = ""
            //inputBox.value = string
        }
        else if(btn.target.innerText == ""){
            string  = string.substring(0, string.length-1)
            //inputBox.value = string
        }
        else if(btn.target.innerText == "√"){
            try{
                string  = Math.sqrt(string)
            }
            catch(error){
                string = "Error"
            }
            //inputBox.value = string
        }
        else{
            string += btn.target.innerText
            //inputBox.value = string
        }

        inputBox.value = string
    })
})

