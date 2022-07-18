import logo from "./logo.svg";
import "./App.css";
import UploadBankStatement from "./payslipUpload/bankStatementUpload";
// import PaySlipUploadNew from "./payslipUpload/newPayslipUpload";
// import UploadPaySlips from "./Payslips/UploadPaySlips";
// import DemoPdfUpload from "./demoPdfUpload";
function App() {
  return (
    <div>
      <UploadBankStatement />
      {/* <PaySlipUploadNew /> */}
      {/* <UploadPaySlips /> */}
      {/* <DemoPdfUpload /> */}
    </div>
  );
}

export default App;
