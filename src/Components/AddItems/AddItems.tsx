import {FC} from 'react';
import {ItemsMenu} from '../../types';

interface AddItemsProps {
    item: ItemsMenu;
    createOrder: (name: string, price: number) => void;
}

const AddItems: FC<AddItemsProps> = ({ item, createOrder }) => {
    return (
        <div className="addItemsMenu">
            <button
                className="itemBtn" key={item.id} onClick={() => createOrder(item.name, item.price)}>
                <img className="btnImage" src={item.image} alt=""/>
                {item.name}
                <p className="costItem"> {item.price} KGS </p>
            </button>
        </div>
    );
};

export default AddItems;