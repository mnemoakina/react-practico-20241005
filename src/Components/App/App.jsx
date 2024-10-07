import classes from './App.module.css'
import OrderListPicker from '../OrderPicker/OrderPicker.jsx'
import OrderList from '../OrderList/OrderList.jsx';

function App() {
  return (
    <div className={classes.order}>
      <OrderListPicker/>
      <OrderList/>
    </div>
  );
}

export default App
