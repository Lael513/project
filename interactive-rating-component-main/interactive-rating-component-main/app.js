const rating_cards=document.querySelectorAll(".ratings span");
const submit_button=document.querySelector(".submit");
const rate_point=document.getElementById("rate");
const rating_section=document.querySelector(".rating");
const thank_section=document.querySelector(".thank");

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) =>{
        const active=document.querySelector('.checked');
        if(active){
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate=e.target.innerText;
        
    } )
})


 submit_button.addEventListener("click", ()=> {

        
        thank_section.classList.remove("hidden");
        rating_section.style.display="none"
    })
 rating_cards.forEach((rate) => {
    rate.addEventListener("click" ,()=>{
        rate_point.innerHTML=rate.innerHTML
    })
 })