import React, { useState } from "react";
import "./upload.scss";
import "../Payslips/UploadPaySlips.scss";

// import { TopHeader2 } from "../../reusableComponents/TopHeader2";
// import backArrow from "../../assets/img/arrowBack.svg";
// import Upload from "../../assets/img/upload.svg";
import S3FileUpload from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;

const UploadBankStatement = () => {
  const [uploadPdf, setUploadPdf] = useState({ payslipOne: null });
  const [errors, setErrors] = useState({ payslipOne: false });

  const pdfUploadFun = (event, name) => {
    event.stopPropagation();
    // console.log(event.target.files);
    const oldData = { ...uploadPdf };
    const errorsData = { ...errors };
    if (event.target.files.length >= 1) {
      if (name === "one") {
        oldData.payslipOne = event.target.files[0];
        if (errorsData.payslipOne) errorsData.payslipOne = false;
      }
      setUploadPdf(oldData);
      setErrors(errorsData);
    }
  };
  const gobackfunction = () => {
    // history.goBack();
  };

  const validation = () => {
    const oldData = { ...errors };
    if (!uploadPdf.payslipOne) {
      oldData.payslipOne = true;
    }
    if (!oldData.payslipOne) {
      onContinue();
    }
    setErrors(oldData);
  };

  const onContinue = () => {
    const config = {
      bucketName: "lfcustomerdocs",
      // dirName:localStorage.getItem(userId) /* optional  lfcustomerdocs/*/,
      dirName: 234234,
      region: "ap-south-1",
      accessKeyId: "" /* Enetr access key ID*/,
      secretAccessKey: "" /* Enetr secret access key*/,
    };
    Object.keys(uploadPdf).map((el) => {
      if (uploadPdf[el]) {
        S3FileUpload.uploadFile(uploadPdf[el], config)
          .then((data) => {
            console.log(data.location);
          })
          .catch((err) => {
            alert(err);
          });
      }
    });
    setUploadPdf({ payslipOne: null });
  };

  return (
    <>
      <div className="mainDivPdf">
        {/* <div>
          <TopHeader2 />
          <div className="backArrowStyle">
            <img src={backArrow} alt="back" onClick={gobackfunction} />
          </div>
        </div> */}
        <p className="firstMonthCss">Upload Your Bank statement</p>
        <p className="firstMonthCss">6 Months Bank Statement</p>
        <div className="divpdf">
          <label className="labelpdf" htmlFor="inputTag">
            {uploadPdf.payslipOne ? uploadPdf.payslipOne.name : "Choose file"}
            <img
              className="imgafepdf"
              //  src={Upload}
            />
            <input
              className="inputpdf"
              id="inputTag"
              type="file"
              onChange={(event) => pdfUploadFun(event, "one")}
            />
          </label>
        </div>
        <p className="paySlipErr">
          {errors.payslipOne && "Please upload the payslip"}
        </p>
        <div className="">
          <button className=" btnclass" onClick={validation}>
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadBankStatement;
