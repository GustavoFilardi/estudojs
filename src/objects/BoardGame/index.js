import "./style.css";
import CardFrontBack from"../../components/CardFrontBack"
import SocoreBoard from "../ScoreBoard";
import PlayerName from "../../components/PlayerName";


function BoardGame(amountCards) {
        
    const $htmlCardFrontBack = CardFrontBack(); 
    const $htmlContentCard = $htmlCardFrontBack.repeat(amountCards);
        
       
        
       
    return /*html*/`
        <section class="board-game"> 
            ${$htmlContentCard}
                
        </section>      
                
    ` ;
    
        
}
export default BoardGame;