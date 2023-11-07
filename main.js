
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import "./src/styles/settings/colors.css";

import BoardGame from "./src/objects/BoardGame";
import SocoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${SocoreBoard()}
    ${BoardGame(12)}
    `
)






