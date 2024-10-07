import classes from "./OrderList.module.css"; 
import OrderListRemover from '../OrderListRemover/OrderListRemover.jsx';
import OrderListResetter from "../OrderListResetter/OrderListResetter.jsx";
import {cart} from "../../globals.js";

let cartTotal = cart.reduce((acc,curr)=>acc + (curr.quantity*curr.price) , 0);

function OrderList() {
  return (
    <div className={classes.orderList}>
      <div className={classes.title}>
        <h2>ORDER LIST</h2>
        <OrderListResetter />
      </div>
      <div className={classes.cart}>
        <h3>Carrito</h3>
        <hr />
        <ul className={classes.cartItems}>
          <li className={classes.cartItem}>
            <span className={classes.cartItemProduct}>item1</span>
            <span className={classes.cartItemQuantity}>x 01</span>
            <OrderListRemover />
          </li>
          <li className={classes.cartItem}>
            <span className={classes.cartItemProduct}>item2</span>
            <span className={classes.cartItemQuantity}>x 02</span>
            <OrderListRemover />
          </li>
          <li className={classes.cartItem}>
            <span className={classes.cartItemProduct}>item3</span>
            <span className={classes.cartItemQuantity}>x 03</span>
            <OrderListRemover />
          </li>
        </ul>
      </div>
      <hr />
      <div className={classes.calc}>
        <span className={classes.calcDesc}>TOTAL:</span>
        <span className={classes.calcCurrency}>(US$)</span>
        <span className={classes.calcTotal}>{cartTotal}</span>
      </div>
    </div>
  );
}

export default OrderList;
