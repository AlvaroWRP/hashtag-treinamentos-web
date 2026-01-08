import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCartContext, cartItemsQuantity } from '../../contexts/CartContext';

export function UserButtons() {
    const { toggleCartOpenState, cartItems } = useCartContext();
    const itemsQuantity = cartItemsQuantity(cartItems);

    return (
        <div>
            <button className="px-2 relative cursor-pointer" onClick={toggleCartOpenState}>
                <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                {!!itemsQuantity && (
                    <div
                        id="cart-amount"
                        className="absolute inline-flex items-center justify-center w-6 h-6 text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
                    >
                        {itemsQuantity}
                    </div>
                )}
            </button>
            <Link to="/history">
                <FontAwesomeIcon className="px-2" icon={faUser}></FontAwesomeIcon>
            </Link>
        </div>
    );
}
