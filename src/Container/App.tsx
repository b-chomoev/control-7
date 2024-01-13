import React, {useState} from 'react';
import Hamburger from '../assets/hamburger.png';
import Cheeseburger from '../assets/cheeseburger.png';
import Coffee from '../assets/coffee.png';
import Tea from '../assets/tea.png';
import Cola from '../assets/cola.png';
import Fries from '../assets/fries.png';
import './App.css';

const App = () => {

    const itemsList = [
        {id: Math.random(), name: 'Hamburger', price: 80, image: Hamburger},
        {id: Math.random(), name: 'Cheeseburger', price: 90, image: Cheeseburger},
        {id: Math.random(), name: 'Coffee', price: 70, image: Coffee},
        {id: Math.random(), name: 'Tea', price: 50, image: Tea},
        {id: Math.random(), name: 'Cola', price: 40, image: Cola},
        {id: Math.random(), name: 'Fries', price: 45, image: Fries},
    ];

    const [orders, setOrders] = useState<{id?: number; name: string; count: number; price: number}[]>([]);
    


    return (
        <div className='container'>
            <div className='OrderList'>
                <h3>Order details</h3>
                <p>Order is empty ! Please, make an order!</p>
            </div>
            <div className='ItemsList'>
                <h3>Add Items</h3>

            </div>
        </div>
    );
};

export default App;