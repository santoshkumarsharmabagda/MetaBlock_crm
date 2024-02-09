import React, { Fragment, useContext, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Media,
  Row,
  Table,
} from "reactstrap";
import { MarkJecno, MARKJENCOEMAIL } from "../../../Constant";
import NavTab from "./NavTab";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/user/user.png";
import { Image, P, H6, Btn, Breadcrumbs } from "../../../AbstractElements";
import BookmarksTabs from "./BookmarksTabs";
import CustomizerContext from "../../../_helper/Customizer";
import "./withdraw.css";
import { toast } from "react-toastify";
import { FaSort } from "react-icons/fa";
import { SiMoneygram } from "react-icons/si";
const BookmarksContain = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const [isOpen, setIsOpen] = useState(false);

  const withdrawdata = [
    {
      sno: "1",
      amount: "300",
      method: "Paytm",
      status: "pennding",
      message: "withdraw",
      date: "12/02/2024",
      time: "12:am",
    },
    {
      sno: "2",
      amount: "100",
      method: "Phonepe",
      status: "approved",
      message: "withdraw",
      date: "14/04/2024",
      time: "2:00 Am",
    },
  ];

  const withdraw = () => {
    toast.success("Withdraw Sussesfull");
  };

  const [searchTermone, setSearchTermone] = useState(""); // Step 1
  const handleSearchChangeone = (e) => {
    setSearchTermone(e.target.value);
  };

  const filteredwithdrawdata = withdrawdata.filter((item) => {
    // Step 3
    return (
      item.sno.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.image.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.message.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.time.toLowerCase().includes(searchTermone.toLowerCase())
    );
  });

  const copyTableone = () => {
    const table = document.getElementById("myTableone");

    if (!table) {
      console.error("Table not found");
      return;
    }

    const range = document.createRange();
    range.selectNode(table);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      alert("Table copied to clipboard!"); // Show a simple notification
    } catch (err) {
      console.error("Unable to copy table to clipboard", err);
    } finally {
      window.getSelection().removeAllRanges();
    }
  };

  const downloadTableAsCSVone = () => {
    const table = document.getElementById("myTableone");

    if (!table) {
      console.error("Table not found");
      return;
    }

    const rows = table.querySelectorAll("tr");
    const csvData = [];

    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll("td, th");

      cells.forEach((cell) => {
        rowData.push(cell.innerText);
      });

      csvData.push(rowData.join(","));
    });

    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintone = () => {
    window.print();
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Withdraw" parent="Apps" title="Withdraw" />
      <Container fluid={true}>
        <div
          className="withdrawmoenyinputs"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="avialablebalance">
          <div  className="d-flex align-items-center justify-between w-100">
                  <h5 className="mb-0 text-success">Current Balance</h5>
                  <div className="ms-auto">
                    <SiMoneygram
                      style={{ fontSize: "25px" }}
                      className="bx bx-dollar fs-3 text-success"
                    />
                  </div>
                </div>
            <div className="progress my-2" style={{ height: 4, width:"100%" }}>
                  <div 
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="progress-bar bg-success"
                    // style={{ width: "55%" }}
                  />
                </div>
            <span>₹5000</span>
        </div>

          {/* <div class="card-1 radius-10">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <h5 class="mb-0 text-warning">5630</h5>
                <div class="ms-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="bx bx-dollar fs-3 text-warning"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style="font-size: 25px;"
                  >
                    <title></title>
                    <path d="M24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12c0-1.8257.4071-3.5554 1.1374-5.1051C.6514 8.1257.433 9.3446.433 10.4863c0 5.4334 4.3868 6.2203 6.2537 6.2023 2.8371-.0257 6.1543-1.416 8.9485-3.9909l-.4714 2.6494c-.1054.606.2906 1.1392.8957 1.1426h.2503c.6274 0 1.0732-.5108 1.1863-1.1426l1.0063-5.6622c.12-.6283-.2932-1.14-.9214-1.14h-5.6726c-.6309 0-1.2077.3342-1.32.9677l-.0446.2554c-.09.6026.33 1.0569.9317 1.0569h2.9589a9.48 9.48 0 0 0-.1414.1388c-2.04 1.9312-4.5558 2.988-6.6403 2.988-2.0803 0-4.41-1.3123-4.41-4.2686C3.2426 3.5546 8.9906 0 12 0c6.6137 0 12 5.3726 12 12"></path>
                  </svg>
                </div>
              </div>
              <div class="progress my-2" style="height: 4px;">
                <div
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  class="progress-bar bg-warning"
                ></div>
              </div>
              <div class="d-flex align-items-center">
                <p class="mb-0">Messages</p>
              </div>
            </div>
          </div> */}

          <div className="withdraw-main">
            <div className="withdrawinputs">
              <Input
                className="withdrawinputfiled"
                type="text"
                placeholder="enter your amount"
              />
              <Button onClick={withdraw}>Withdraw</Button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "100px" }}>
          <div className="withdrawtablebutton">
            <div
            // style={ {
            //   display: "flex",
            //   position: "relative",
            //   left: "66%",
            //   top: "0",
            //   gap: "5px"
            // } }
            >
              <Input
                className="searchdaily"
                type="text"
                placeholder="Search..."
                value={searchTermone}
                onChange={handleSearchChangeone}
                style={{
                  height: "35px",
                  width: "380px",
                  // marginTop:"15px"
                  // position: "absolute"
                }}
              />
            </div>
            <div className="tableworkbuttondaily">
              <Button
                color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={copyTableone}
              >
                Copy
              </Button>
              <Button
                color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={downloadTableAsCSVone}
              >
                CSV
              </Button>
              <Button
                color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={downloadTableAsCSVone}
              >
                Excel
              </Button>
              <Button color="primary" onClick={handlePrintone}>
                Print
              </Button>
            </div>
          </div>
          <div className="dailytasktable" style={{ overflowX: "auto" }}>
            <Table id="myTableone">
              <thead>
                <tr>
                  <th>
                    Sno.
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Amount
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Method
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Status
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  {/* <th>
                    Message
                    <FaSort style={{ color: "#BABABA" }} />
                  </th> */}
                  <th>
                    Date
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Time
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredwithdrawdata.map((item, index) => (
                  <tr key={index}>
                    <td>{item.sno}</td>
                    <td>{item.amount}</td>
                    <td>{item.method}</td>
                    <td
                      style={{
                        color: item.status === "Complete" ? "blue" : "red",
                      }}
                    >
                      {item.status}
                    </td>
                    {/* <td>{item.message}</td> */}
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="pagination-first">
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</div>
        </div>
      </Container>
    </Fragment>
  );
};
export default BookmarksContain;
