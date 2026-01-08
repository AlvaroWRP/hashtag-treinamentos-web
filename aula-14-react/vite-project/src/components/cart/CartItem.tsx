import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { reducedData } from '../../../data';
import { useCartContext } from '../../contexts/CartContext';

export function CartItem({ id, quantity }) {
    const { name, price, image } = reducedData[id];
    const { addToCart, decreaseProductQuantity } = useCartContext();

    return (
        <article className="flex bg-stone-100 p-1 border rounded-mg relative">
            <img src={image} className="h-24"></img>
            <button className="text-right text-l fixed absolute top-0 right-2 text-slate-950">
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <div className="flex flex-col justify-around mx-2">
                <p className="text-slate-950 text-sm">{name}</p>
                <p className="text-slate-400 text-xs">Tamanho G</p>
                <p className="text-green-700 text-lg">{price}</p>
                <div className="flex text-slate-950 absolute right-2 bottom-0 mb-2">
                    <button
                        onClick={() => decreaseProductQuantity(id)}
                        className="border border-slate-400 hover:border-slate-900 mb-2"
                    >
                        <FontAwesomeIcon icon={faMinus} className="p-1"></FontAwesomeIcon>
                    </button>
                    <p className="p-2 w-8 mx-auto">{quantity}</p>
                    <button
                        onClick={() => addToCart(id)}
                        className="border border-slate-400 hover:border-slate-900 mb-2"
                    >
                        <FontAwesomeIcon icon={faPlus} className="p-1"></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </article>
    );
}
