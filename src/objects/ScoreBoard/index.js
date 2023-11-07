import "./style.css"
import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function SocoreBoard(amountPlayer) {
    
    
    return/*html*/`
    <header class="socore-board">
        ${ArrowDown()}
        ${PlayerName(1)}
        ${PlayerScore(2)}
        ${VsPlayer('VS')}
        ${PlayerScore(1)} 
        ${PlayerName(2)}
      
    </header>
    ` 
     
    
}
export default SocoreBoard