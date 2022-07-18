import React from "react";
import "./UploadPaySlips.scss";
const UploadPaySlipsNew = () => {
  const [pdfOne, setUploadOne] = React.useState("");
  const [pdfTwo, setUploadTwo] = React.useState("");
  const [pdfThree, setUploadThree] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFile = [pdfOne, pdfTwo, pdfThree];
    console.log(newFile);
    // alert("hi vishnu");
    setUploadOne("");
    setUploadTwo("");
    setUploadThree("");
    // alert(newFile);
  };

  const fileHandler1 = (event) => {
    setUploadOne(event.target.value);
  };
  const fileHandler2 = (event) => {
    setUploadTwo(event.target.value);
  };
  const fileHandler3 = (event) => {
    setUploadThree(event.target.value);
  };

  return (
    <div className="mainDivSlip">
      <form onSubmit={handleSubmit}>
        <p className="uploadDoc">upload your documents</p>
        <div className="marginPdf">
          <label className="titleText">January month slip</label>
          <input
            name="pay1"
            onChange={fileHandler1}
            style={{ marginTop: "12px" }}
            type="file"
          />
        </div>
        <div className="marginPdf">
          <label className="titleText">Febuary month slip</label>
          <input
            name="pay2"
            style={{ marginTop: "12px" }}
            onChange={fileHandler2}
            type="file"
          />
        </div>
        <div className="marginPdf">
          <label className="titleText">March month slip</label>
          <input
            name="pay3"
            style={{ marginTop: "12px" }}
            onChange={fileHandler3}
            type="file"
          />
        </div>
        <div>
          <button type="submit" className="btnclass">
            UPLOAD DOCS
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPaySlipsNew;
