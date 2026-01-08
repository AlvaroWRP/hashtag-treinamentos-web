import { CartItem } from './CartItem';
import { useCartContext } from '../../contexts/CartContext';
import { CartItemSimplified } from './CartItemSimplified';

export function CartProducts({ isHomepage = true }) {
    const { cartItems } = useCartContext();
    const cartItemsArray = [];

    for (const itemId in cartItems) {
        cartItemsArray.push({ id: Number(itemId), quantity: cartItems[itemId] });
    }

    return (
        <section
            className={`flex flex-col justify-start overflow-auto gap-2 ${
                isHomepage ? 'h-3/5' : ''
            }`}
        >
            {cartItemsArray.map((product) => {
                return isHomepage ? (
                    <CartItem key={product.id} {...product}></CartItem>
                ) : (
                    <CartItemSimplified key={product.id} {...product}></CartItemSimplified>
                );
            })}
        </section>
    );
}
