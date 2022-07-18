// import "./App.css";
import S3FileUpload from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;

function DemoPdfUpload() {
  const onFileChange = (file) => {
    const config = {
      bucketName: "lfcustomerdocs",
      dirName: 234234 /* optional  lfcustomerdocs/*/,
      region: "ap-south-1",
      accessKeyId: "" /* Enetr access key ID*/,
      secretAccessKey: "" /* Enetr secret access key */,
    };
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        console.log(data.location);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="App">
      <h1>AWS S3 upload file</h1>
      <input type="file" onChange={(e) => onFileChange(e.target.files[0])} />
    </div>
  );
}

export default DemoPdfUpload;
