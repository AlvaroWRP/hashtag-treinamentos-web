import { useCartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { CartProducts } from './CartProducts';
import { TotalPriceCell } from './TotalPriceCell';
import { Link } from 'react-router-dom';

export function CartOverlay() {
    const { isCartOpen, toggleCartOpenState } = useCartContext();

    return (
        <div
            className={`h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out duration-200 ${
                isCartOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <section
                id="external-cart-area"
                className="w-3/4 bg-slate-950 opacity-50"
                onClick={toggleCartOpenState}
            ></section>
            <section
                id="cart-area"
                className="w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white"
            >
                <div className="flex justify-between border-b border-slate-50 px-4 py-2">
                    <p>Meu carrinho</p>
                    <button onClick={toggleCartOpenState}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                </div>
                <CartProducts></CartProducts>
                <TotalPriceCell></TotalPriceCell>
                <Link
                    to="/checkout"
                    className="bg-slate-100 text-slate-950 rounded-sm p-1 hover:bg-slate-300 text-center"
                >
                    Finalizar compra
                </Link>
            </section>
        </div>
    );
}
