import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["https://static.thairath.co.th/media/PZnhTOtr5D3rd9odAf9nj2tTWFFT1cWdLouErBGIZUBaMOY.webp", "https://news.thaipbs.or.th/media/TSNBg3wSBdng7ijMhT0ud4HrQYofJjOtBcGTSqqeocy.jpg"];
  const buttonImages = ["https://media.istockphoto.com/id/184276818/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B9%89%E0%B8%A5%E0%B9%81%E0%B8%94%E0%B8%87.jpg?s=612x612&w=0&k=20&c=GV53zmGQRQaOAOEtYZAVIZfX0sM49I6sjUVtQcLDeIg=", 
    "https://fit-d.com/image_webp/f?src=./uploads/food/5f6c8c69a8f190b979f93f02475aac80.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wassermelone.jpg/1200px-Wassermelone.jpg"];

  const increaseLevel = (increment) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + increment;
      if (newLevel >= 100) {
        setImageIndex(1);
      }
      return newLevel;
    });
  };

  const resetLevel = () => {
    setLevel(0);
    setImageIndex(0);
  };

  const imageSize = `${Math.max(level * 5, 45)}px`;

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0
  };

  const cardStyle = {
    border: "2px dashed",
    padding: "20px",
    width: "500px",
    height: "500px",
    position: "relative",
    overflow: "hidden"
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const buttonImageStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    margin: "10px"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    color: "#34495e",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "36px" }}>Level {level}</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[0]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(10)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(10)} style={buttonText}>
              Level +10
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[1]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(20)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(20)} style={buttonText}>
              Level +20
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[2]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(30)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(30)} style={buttonText}>
              Level +30
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={resetLevel}
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                cursor: "pointer",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px"
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
