import {useState} from 'react';
import Hamburger from '../assets/hamburger.png';
import Cheeseburger from '../assets/cheeseburger.png';
import Coffee from '../assets/coffee.png';
import Tea from '../assets/tea.png';
import Cola from '../assets/cola.png';
import Fries from '../assets/fries.png';
import './App.css';
import {ItemsMenu} from '../types';
import AddItems from '../Components/AddItems/AddItems';
import OrderDetails from '../Components/OrderDetails/OrderDetails';

const App = () => {

    const itemsList: ItemsMenu[] = [
        {id: Math.random(), name: 'Hamburger', price: 80, image: Hamburger},
        {id: Math.random(), name: 'Cheeseburger', price: 90, image: Cheeseburger},
        {id: Math.random(), name: 'Coffee', price: 70, image: Coffee},
        {id: Math.random(), name: 'Tea', price: 50, image: Tea},
        {id: Math.random(), name: 'Cola', price: 40, image: Cola},
        {id: Math.random(), name: 'Fries', price: 45, image: Fries},
    ];

    const [orders, setOrders] = useState<{id?: number; name: string; count: number; price: number}[]>([]);

    const createOrder = (itemName: string, price: number) => {
        const existingOrderIndex = orders.findIndex((order) => order.name === itemName);

        if (existingOrderIndex !== -1) {
            const updatedOrders = [...orders];
            const existingOrder = updatedOrders[existingOrderIndex];

            updatedOrders[existingOrderIndex] = {
                ...existingOrder,
                count: existingOrder.count + 1,
                price: existingOrder.price + price,
            };

            setOrders(updatedOrders);
        } else {
            const newOrder = { id: Math.random(), name: itemName, count: 1, price: price };
            setOrders([...orders, newOrder]);
        }
    };

    const getTotalSum = () => {
        return orders.reduce((total, order) => {
            return total + order.price;
        }, 0);
    };

    const itemButton = itemsList.map((item) => (
        <AddItems key={item.id} item={item} createOrder={createOrder} />
    ));

    const orderedItems = orders.map((order) => (
        <OrderDetails key={order.id} order={order} />
    ));


    return (
        <div className='container'>
            <div className='OrderList'>
                <p className='textInfo'>Order details:</p>
                {orders.length > 0 ? <strong className='totalPrice'>Total price: {getTotalSum()} KGS </strong> :
                    <p>Make an order!</p>}
                {orderedItems}
            </div>
            <div className='ItemsList'>
                <strong>Add items: </strong>
                <div className='gridContainer'>
                    {itemButton}
                </div>
            </div>
        </div>
    );
};

export default App;