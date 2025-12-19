import { useState, useEffect } from "react";
import { supabase } from "./supabase";

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const uploadFile = async () => {
    try {
      setErrorMsg("");

      if (!file) {
        alert("Please select a file first");
        return;
      }

      setUploading(true);
      console.log("Uploading file:", file);

      // IMPORTANT: bucket name must be EXACT
      const filePath = `${Date.now()}-${file.name}`;

      const { data, error } = await supabase.storage
        .from("uploads")
        .upload(filePath, file);

      console.log("Upload response:", data, error);

      if (error) {
        setErrorMsg(error.message);
        setUploading(false);
        return;
      }

      const { data: publicData } = supabase.storage
        .from("uploads")
        .getPublicUrl(filePath);

      console.log("Public URL:", publicData.publicUrl);

      setUploadedUrl(publicData.publicUrl);
      alert("Upload successful 🎉");
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMsg("Unexpected error occurred. Check console.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hello World 🚀</h1>

      <h3>Upload a file</h3>

      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
          setUploadedUrl("");
        }}
      />

      <br />
      <br />

      <button onClick={uploadFile} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {errorMsg && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ❌ {errorMsg}
        </p>
      )}

      {uploadedUrl && (
        <p style={{ marginTop: "15px" }}>
          ✅ File uploaded:{" "}
          <a href={uploadedUrl} target="_blank" rel="noreferrer">
            View / Download
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
