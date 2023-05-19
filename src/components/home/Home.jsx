import "./Home.css";
import welcomeimageone from "../../images/welcomeimage.jpeg";
import welcomeimagetwo from "../../images/welcomeimage1.jpeg";

export default function Home() {
  return (
    <div className="home-wrapper" id="home">
      <div className="welcome-text-wrapper">
        <h1>
          Welcome to <br></br>
          <div style={{ display: "flex", fontFamily: "poppins" }}>
            <div style={{ color: "#3e97c9" }}>tra</div>
            <div style={{ color: "#233f8e" }}>well</div>
          </div>
        </h1>
        <p>Your smart travel buddy</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img src={welcomeimageone} alt="" className="welcome-image welcomeone"></img>
        <img src={welcomeimagetwo} alt="" className="welcome-image welcometwo"></img>
      </div>
      <div>
        
      </div>
    </div>
  );
}
