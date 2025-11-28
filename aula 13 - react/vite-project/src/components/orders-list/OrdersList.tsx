import { Order } from '../order/Order';

const orders = [
    { table: 3, client: 'Márcio', items: 'Pizza de queijo e Suco de laranja.' },
    { table: 5, client: 'Maria', items: 'Pizza de calabresa.' },
    { table: 7, client: 'Tobias', items: 'Pizza de calabresa e Água.' },
    { table: 1, client: 'Joaquim', items: 'Salada de frutas.' },
];

export function OrdersList() {
    return (
        <div>
            <ul>
                {orders.map((order, index) => (
                    <Order
                        key={index}
                        table={order.table}
                        client={order.client}
                        items={order.items}
                    ></Order>
                ))}
            </ul>
        </div>
    );
}
