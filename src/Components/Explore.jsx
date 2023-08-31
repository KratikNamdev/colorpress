import React from "react";
import ex from "../Assets/Rectangle 122.png"
function Explore() {
  return (
    <>
      <div className="ecpcat">
        <h2 style={{textAlign:"center"}}>Explore all categories</h2>
     <div className="scroll-container">
     <div className="cate">
          <div className="circle"><img src={ex}/></div>
          <div className="circle"><img src={ex}/></div> <div className="circle"><img src={ex}/></div>{" "}
          <div className="circle"><img src={ex}/></div> <div className="circle"><img src={ex}/></div>{" "}
          <div className="circle"><img src={ex}/></div> <div className="circle"><img src={ex}/></div>
        </div>
        <div className="cate">
          <div className="circle"><img src={ex}/></div>
          <div className="circle"><img src={ex}/></div> <div className="circle"><img src={ex}/></div>{" "}
          <div className="circle"><img src={ex}/></div> <div className="circle"><img src={ex}/></div>{" "}
          <div className="circle"><img src={ex}/></div> <div className="circle"><img src={ex}/></div>
        </div>
     </div>
      </div>
    </>
  );
}

export default Explore;
