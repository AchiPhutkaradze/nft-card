import "./texts.css";
import EthIcon from "../../assets/icon-ethereum.svg";
import ClockIcon from "../../assets/icon-clock.svg";
import Avatar from "../../assets/image-avatar.png";

function Texts() {
  return (
    <>
      <div className="texts">
        <h1>Equilibrium #3429</h1>
        <p className="describe">
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
      <div className="row">
        <div className="eth">
          <img src={EthIcon}></img>
          <span id=" eth-span">0.041 ETH</span>
        </div>
        <div className="time">
          <img src={ClockIcon}></img>
          <span id=" eth-span">0.041 ETH</span>
        </div>
        <hr />
      </div>
      <div className="footer-div">
        <img id="avatar-icon" src={Avatar}></img>
        <p className="creator">
          Creation of <span id="name">Jules Wyvern </span>
        </p>
      </div>
    </>
  );
}

export default Texts;
