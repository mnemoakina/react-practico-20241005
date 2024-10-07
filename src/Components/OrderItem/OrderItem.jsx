/* eslint-disable react/prop-types */
import classes from './OrderItem.module.css'
import {cart,meals} from '../../globals.js';

//(productId, howMany)- it only adds it if there is stock
function addToOrder(id, howMany) {    
  const prodIndex = meals.indexOf(meal=> meal.id === id);  
  console.log("AddToOrder(id,howMany,prodIndex):",id, howMany, prodIndex);
  
  if (prodIndex < 0){
    alert("There is no product registered with this ID");    
  } else {
    if (meals[prodIndex].quantity < 1){
      alert("Out of Stock");
    } else {      
      meals[prodIndex].quantity--;
      const prodIndexCart = cart.indexOf(prod=> prod.id === id);
      if (prodIndexCart >= 0){
        //agregar uno
        cart[prodIndexCart].quantity += howMany;
      } else {
        //clone a product and push the whole object, setting the quantity to "howMany" value.
        const prodToAdd = cart[prodIndexCart].map((e) => e);
        prodToAdd.quantity = howMany;
        cart.push(prodToAdd);
      }
    }
  }
};

function OrderItem({id,name,price,quantity,imgURL}) {
  let howManyItems = 1;
  
  return (
  <li className={classes.orderItem}>
    <button className={classes.orderItemBtn} onClick={()=>addToOrder(id,howManyItems)}>
      <img src={imgURL} alt={name} />
      <p>{name.toUpperCase()}</p>
    </button>
  </li>
  );
}

export default OrderItem