import music from "./music-solid.svg";
import "./App.css";
function App() {
  let nInterval;

  // changing the background color of the body every 2 second
  const changeColor = () => {
    if (!nInterval) {
      nInterval = setInterval(() => {
        // hex color code
        let color = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + color;
      }, 2000);
      let audio = document.getElementById("audio");
      audio.play();
    }
  };

  // clearing the interval
  const stopColor = () => {
    clearInterval(nInterval);
    nInterval = null;
    let audio = document.getElementById("audio");
    audio.pause();
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={music} alt="logo" height={100} />
        <button
          onMouseOver={changeColor}
          onMouseOut={stopColor}
          style={{
            margin: 10,
            backgroundColor: "black",
            color: "#fff",
            border: "none",
            padding: 10,
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Disco Music
        </button>
      </div>
      <div>
        <audio loop id="audio">
          <source
            src="http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
            type="audio/ogg"
          />
        </audio>
      </div>
    </div>
  );
}

export default App;
