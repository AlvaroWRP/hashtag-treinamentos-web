import { reducedData } from '../../../data';
import { useCartContext } from '../../contexts/CartContext';

function calculateTotalPrice(cartObject) {
    let price = 0;

    for (const cartItemId in cartObject) {
        price += reducedData[cartItemId].price * cartObject[cartItemId];
    }
    return price;
}

export function TotalPriceCell() {
    const { cartItems } = useCartContext();
    const totalPrice = calculateTotalPrice(cartItems);

    return (
        <section className="flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly">
            <p>Total: </p>
            <p>{`$${totalPrice}`}</p>
        </section>
    );
}
