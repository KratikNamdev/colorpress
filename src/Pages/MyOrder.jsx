import React from "react";
import Navbar from "../Components/Navbar";
import NavCategory from "../Components/NavCategory";
import img from "../Assets/Rectangle 122.png";
import Footer from '../Components/Footer';

function MyOrder() {
  return (
    <>
      <Navbar />
      <NavCategory />
      <br/><br/>
      <div className="container">
        <div className="myorderheading">
        
          <h1> My Orders</h1>
          <p>
            View and edit all your pending, delivered. and
            <br /> returned orders here.
          </p>
        </div>
        <br/><br/><br/>
        <div className="myorder">
          <div className="orderdetails">
            <div className="orderno">
              <button>
                <span style={{ color: "#ff066e" }}>Order</span> #R0374915036
              </button>
            </div>
            <div className="orderdate">
              <p>Order Placed: Thu, 17Th Nov 16</p>
            </div>
            <div className="orderno">
              <button>
                <span style={{ color: "#ff066e" }}>→ TRACK ORDER</span>{" "}
              </button>
            </div>
          </div>

<br></br>
          <div className="ordercard">
            <div className="ordercard-img">
              <img src={img} />
            </div>
            <div className="ordercard-detail">
              <p style={{ fontWeight: "600", fontSize: "20px" }}>
                Visitng card print
              </p>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Best Visiting Card
              </p>
              <p style={{ fontWeight: "300", fontSize: "14px" }}>
                By: Vista Prints
              </p>
              <span className="qt">
                <p style={{ fontWeight: "300", fontSize: "14px" }}>Qty: 1</p>
                <p
                  style={{
                    marginLeft: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  RS.1250
                </p>
              </span>
            </div>
            <div className="ordercard-status">
              <p style={{ fontWeight: "400", fontSize: "14px" }}>Status</p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#ff066e",
                }}
              >
                In Transit
              </p>
            </div>

            <div className="ordercard-date">
              <p style={{ fontWeight: "400", fontSize: "14px" }}>
                Delivery Expected by:
              </p>
              <p style={{ fontWeight: "500", fontSize: "16px" }}>
                24 December 2023
              </p>
            </div>
          </div>
          <br/>



          <div className="ordercard">
            <div className="ordercard-img">
              <img src={img} />
            </div>
            <div className="ordercard-detail">
              <p style={{ fontWeight: "600", fontSize: "20px" }}>
                Visitng card print
              </p>
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                Best Visiting Card
              </p>
              <p style={{ fontWeight: "300", fontSize: "14px" }}>
                By: Vista Prints
              </p>
              <span className="qt">
                <p style={{ fontWeight: "300", fontSize: "14px" }}>Qty: 1</p>
                <p
                  style={{
                    marginLeft: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  RS.1250
                </p>
              </span>
            </div>
            <div className="ordercard-status">
              <p style={{ fontWeight: "400", fontSize: "14px" }}>Status</p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#ff066e",
                }}
              >
                In Transit
              </p>
            </div>

            <div className="ordercard-date">
              <p style={{ fontWeight: "400", fontSize: "14px" }}>
                Delivery Expected by:
              </p>
              <p style={{ fontWeight: "500", fontSize: "16px" }}>
                24 December 2023
              </p>
            </div>
          </div>
<br></br>
          <div className="orderdetails" style={{borderTop:'1px rgb(212, 210, 210) solid' , backgroundColor:'white',borderRadius:'10px'}}>
            <div className="orderno">
              <button>
                <span >X CANCEL ORDER</span>
              </button>
            </div>
            <div className="orderdate">
              <p>Paid using credit card ending with 7343</p>
            </div>
            <div className="orderno">
        
                <span >Rs. 3005</span>{" "}
              
            </div>
          </div>
        </div>
      </div>

      <br></br>


      <Footer/>
  
    </>
  );
}

export default MyOrder;
