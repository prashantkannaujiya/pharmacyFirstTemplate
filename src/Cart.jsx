import { useContext, useEffect, useState } from "react";
import { userInfo, usercart } from "./App";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [list, setlist] = useState([]);
  const [sum, setsum] = useState(0);
  const u = useContext(userInfo);
  const c = useContext(usercart);
  const navigate=useNavigate()
  useEffect(() => {
    setlist(c.cart);
    let s=0;
    c.cart.forEach((a)=>{
s=s+a.QTY*a.Price;
    })
    setsum(s)
  }, [c.cart]);

  function addQuantity(k) {
    c.cart.forEach((a) => {
      if (a.PRODUCT_ID == k.PRODUCT_ID) {
        a.QTY = a.QTY + 1;
      }
    });
    console.log(c.cart);
    c.setcart([...c.cart]);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }
  function reduceQuantity(k) {
    if (k.QTY > 1) {
      c.cart.forEach((a) => {
        if (a.PRODUCT_ID == k.PRODUCT_ID) {
          a.QTY = a.QTY - 1;
        }
      });
      c.setcart([...c.cart]);
      window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
    } else {
      alert("Already minimum, try removing product !!");
    }
  }

  function remove(k) {
    c.cart = c.cart.filter((a) => {
      if (a.PRODUCT_ID != k.PRODUCT_ID) {
        return a;
      }
    });

    c.setcart([...c.cart]);
    console.log(c.cart);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }
  return (
    <div className="col-9 container overflow-auto ">
      <div>
        <h2 className="text-secondary text-start fw-light mt-2 mb-3 p-1">
          Shopping Cart
        </h2>
        <div className="container">
          {list.map((a) => {
            return (
              <div>
                <div className=" float-end text-secondary">
                  <i
                 class="bi bi-x-circle-fill"
                    onClick={() => {
                      remove(a);
                    }}
                  ></i>
                </div>
                <div className="  d-flex justify-content-start align-items-center border mb-2 bg-white ">
                  
                    <img className="p-2" src={a.IMAGE} style={{height:'15vh',width:'15%'}}/>
                 

                  <div className=" card text-secondary border-0 flex-fill">
                    <div className="card-header text-start text-success ">
                      {a.NAME}
                    </div>
                    <div className="card-body d-flex justify-content-between align-items-start pb-0">
                      <p>
                        <i className="bi bi-currency-rupee"></i>
                        {a.Price}
                      </p>
                      <p>
                        <span className="w-50">Quantity : {a.QTY}</span>
                        <span className="quantity d-inline-flex flex-column ">
                          <span
                            className="bi bi-caret-up-square-fill p-0 m-0"
                            onClick={() => {
                              addQuantity(a);
                            }}
                          ></span>
                          <span
                            className="bi bi-caret-down-square-fill p-0 mt-0"
                            onClick={() => {
                              reduceQuantity(a);
                            }}
                          ></span>
                        </span>
                      </p>
                      <p>
                        Total : <i className="bi bi-currency-rupee"></i> {a.QTY*a.Price}
                      </p>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container text-end text-secondary border-top border-bottom p-3 bg-light fw-bold">
        Subtotal : <i className="bi bi-currency-rupee"></i> {sum}
      </div>
      <div className="mt-2 text-start">
        <Link to={'/'} style={{textDecoration:'none'}}>Continue Shopping</Link><button onClick={()=>{navigate('/checkout')}} className="btn btn-success ms-2 text-white">Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
