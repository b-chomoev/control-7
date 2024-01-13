import { FC } from "react";

interface OrderItemProps {
    order: {
        id?: number;
        name: string;
        count: number;
        price: number;
    };
}

const OrderDetails: FC<OrderItemProps> = ({ order}) => {
    return (
        <div key={order.id} className="orderMenu">
            <p className="orderItems">
                <span>{order.name}</span> x{order.count} <strong>{order.price} KGS</strong>
            </p>
        </div>
    );
};
export default OrderDetails;