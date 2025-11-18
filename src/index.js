import "./style.css";
import { handleCellClick} from "./dom/event";
import cacheDom from "./dom/cacheDom";
import createGrid from "./dom/createGrid";


const { rows} = cacheDom();
const startButton = document.getElementById('start-btn');
createGrid();
startButton.addEventListener('click', () => {
  for (let r of rows) {
    r.addEventListener("click", handleCellClick);
  }
});
