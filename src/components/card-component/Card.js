import "./card.css";
import Equilibrium from "../../assets/equilibrium.jpg";
import Texts from "../text-component/Texts";
import Eye from "../../assets/icon-view.svg";

function Card() {
  return (
    <div className="card">
      <div className="img">
        <img id="Equilibrium" src={Equilibrium} />
        <div className="show">
          <img id="eye" src={Eye} />
        </div>
      </div>
      <Texts />
    </div>
  );
}

export default Card;
