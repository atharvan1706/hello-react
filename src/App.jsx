import "./App.css";
import myPhoto from "./assets/me.jpg";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Hello World 🚀</h1>

      <img
        src={myPhoto}
        alt="My Photo"
        style={{
          width: "200px",
          borderRadius: "50%",
          marginTop: "20px",
        }}
      />

      <h3 style={{ marginTop: "30px" }}>Upload a file</h3>

      <input type="file" />
    </div>
  );
}

export default App;
