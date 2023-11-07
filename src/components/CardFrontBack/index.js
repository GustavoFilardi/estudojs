import "./style.css"
import CardGame from "../CardGame";


function CardFrontBack(){ 
window.CardFrontBack = {}      
window.CardFrontBack.handleClick = (event) => {
   const $origin = event.target;
   const $CardFrontBack = $origin.closest('.card-front-back')
   
   $CardFrontBack.classList.toggle('-active')
   
}
 
    return /*html*/`
    <article class="card-front-back" onclick="CardFrontBack.handleClick(event)">
        <div class="card -front ">  
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame("javascript", 'Logo do JavaScript')}
        </div>    
    </article>
    `;   
    
    
}
export default CardFrontBack;