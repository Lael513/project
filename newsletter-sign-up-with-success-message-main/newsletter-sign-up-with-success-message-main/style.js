const success_message= document.querySelector(".success");
const sign_up= document.querySelector(".sign-up");
const button_sub=document.querySelector(".sub-btn");
const txt1= document.getElementById("email");
const out1= document.getElementById("span");
const error_email= document.querySelector(".invalid-feedback");
const dismiss= document.getElementById('dismiss-btn')
const form_container= document.querySelector(".container")



// Submit button
button_sub.addEventListener("click" , (click)=>{
    success_message.classList.remove("hidden");
    sign_up.style.display = "none"
})

function fun1(){
    out1.innerHTML= txt1.value
}

button_sub.addEventListener("click", fun1)


// Dismiss button
dismiss.addEventListener("click" ,() =>{
    success_message.classList.add("hidden");
    sign_up.style.display = "block";
    txt1.value="";
})


// Email input
txt1.addEventListener('blur' , ()=>{
    if(!txt1.checkValidity()){

    error_email.style.display= 'block';
}


else{
      error_email.style.display= 'none';
}
txt1.addEventListener('focus', ()=>{
    if(!txt1.checkValidity()){

        error_email.style.display= 'none';
    }
    else{
    
            error_email.style.display= '';
        
    }
} )
})

