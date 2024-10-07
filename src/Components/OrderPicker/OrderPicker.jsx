import OrderItem from "../OrderItem/OrderItem.jsx";
import classes from "./OrderPicker.module.css"
import {meals} from "../../globals.js";

function OrderPicker() {
  return (
    <div className={classes.menu}>
      <div className={classes.title}>
        <h2>ADD TO CART</h2>
      </div>
      <ul className={classes.foodList}>
        {meals.map((meal) => (
          <OrderItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} quantity={meal.quantity} imgURL={meal.imgURL}/>
        ))}
      </ul>
    </div>
  );
}

export default OrderPicker;