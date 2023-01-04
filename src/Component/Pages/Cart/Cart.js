import React from "react"; 
import {MdDelete} from "react-icons/md";
const Cart = () => {
  
    const showData = [
        {
            id: 1,
            name: "ola s1 pro",
            price: 10000,
            image:  "https://bd.gaadicdn.com/processedimages/ampere/magnus/source/magnus615192d05146a.jpg?imwidth=880",
            quantity: 1,
            description: "this is a good product"

        },
        {
            id: 2,
            name: "ola se  pro",
            price: 100450,
            image:  "https://bd.gaadicdn.com/processedimages/ampere/magnus/source/magnus615192d05146a.jpg?imwidth=880",
            quantity: 1,
            description: "this is a"

        }
    ] 

     
  return (
    <>
      <div
        style={{
          backgroundColor: "#f5f5f5", 
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1000px",
          }}
        >
          <h3 className="text-center py-5">Cart items</h3>
          <div className="row">
            <div className="col-md-8 d-flex justify-content-center ">
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <h1 className="text-center">Cart is empty</h1>
                <hr />
                {showData.map((item) => {
                    return (
                        <>
                         <div className="card mb-3" key={item.id}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex  align-items-center w-100">
                        <div>
                          <img
                            src= {item.image}
                            className="img-fluid rounded-3"
                            alt= {item.name}
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className="ms-2">
                          <h5>
                            {item.name}
                          </h5>
                          <p className="small mb-0">
                             quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex  align-items-center justify-content-center w-100 ">
                        <div >
                          <h5 className="fw-bold mb-0">Rs.{item.price}</h5>
                        </div>
                         
                      </div>
                      <div className="d-flex  align-items-center">
                         
                        <div style={{ color: "black",width:"50px" }}>
                          <MdDelete style={{float:"right"}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                        </>
                    )
                })}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex  align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>Iphone 11 pro</h5>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex  align-items-center">
                        <div style={{ width: 50 }}>
                          <h5 className="fw-normal mb-0">2</h5>
                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">$900</h5>
                        </div>
                        <a href="/cart" style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <h6 className="text-center">Cart details</h6>
                <hr />
                <div className="d-flex py-3 justify-content-between">
                  <p>Subtotal</p>
                  <p>₹ 0</p>
                </div>
                <div className="d-flex py-3 justify-content-between">
                  <p>Delivery</p>
                  <p>₹ 0</p>
                </div>
                <div className="d-flex py-3 justify-content-between">
                  <p>Total</p>
                  <p>₹ 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
