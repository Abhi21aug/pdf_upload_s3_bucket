import React, { useState } from "react";
import "./upload.scss";
import "../Payslips/UploadPaySlips.scss";
// import { TopHeader2 } from "../../reusableComponents/TopHeader2";
// import backArrow from "../../assets/img/arrowBack.svg";
// import Upload from "../../assets/img/upload.svg";
import S3FileUpload from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;

const PaySlipUploadNew = () => {
  const [uploadPdf, setUploadPdf] = useState({
    payslipOne: null,
    payslipTwo: null,
    payslipThree: null,
  });
  const [errors, setErrors] = useState({
    payslipOne: false,
    payslipTwo: false,
    payslipThree: false,
  });

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
      if (name === "two") {
        oldData.payslipTwo = event.target.files[0];
        if (errorsData.payslipTwo) errorsData.payslipTwo = false;
      }
      if (name === "three") {
        oldData.payslipThree = event.target.files[0];
        if (errorsData.payslipThree) errorsData.payslipThree = false;
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
    if (!uploadPdf.payslipTwo) {
      oldData.payslipTwo = true;
    }
    if (!uploadPdf.payslipThree) {
      oldData.payslipThree = true;
    }
    if (!oldData.payslipOne && !oldData.payslipTwo && !oldData.payslipThree) {
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
    setUploadPdf({
      payslipOne: null,
      payslipTwo: null,
      payslipThree: null,
    });
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
        <p className="firstMonthCss">Upload Your Payslips</p>
        <p className="firstMonthCss">Janauary 2022</p>
        <div className="divpdf">
          <label className="labelpdf" htmlFor="inputTag">
            {uploadPdf.payslipOne ? uploadPdf.payslipOne.name : "Choose file"}
            <img
              className="imgafepdf"
              // src={Upload}
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
        <p className="firstMonthCss">February 2022</p>
        <div className="divpdf">
          <label className="labelpdf" htmlFor="inputTag2">
            {uploadPdf.payslipTwo ? uploadPdf.payslipTwo.name : "Choose file"}
            <img
              className="imgafepdf"
              // src={Upload}
            />
            <input
              className="inputpdf"
              id="inputTag2"
              type="file"
              onChange={(event) => pdfUploadFun(event, "two")}
            />
          </label>
        </div>
        <p className="paySlipErr">
          {errors.payslipTwo && "Please upload the payslip"}
        </p>
        <p className="firstMonthCss">March 2022</p>
        <div className="divpdf">
          <label className="labelpdf" htmlFor="inputTag3">
            {uploadPdf.payslipThree
              ? uploadPdf.payslipThree.name
              : "Choose file"}
            <img
              className="imgafepdf"
              // src={Upload}
            />
            <input
              className="inputpdf"
              id="inputTag3"
              type="file"
              onChange={(event) => pdfUploadFun(event, "three")}
            />
          </label>
        </div>
        <p className="paySlipErr">
          {errors.payslipThree && "Please upload the payslip"}
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

export default PaySlipUploadNew;
