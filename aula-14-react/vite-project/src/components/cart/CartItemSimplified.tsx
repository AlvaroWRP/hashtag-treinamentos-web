import { reducedData } from '../../../data';

export function CartItemSimplified({ id, quantity }) {
    const { name, price, image } = reducedData[id];

    return (
        <article className="flex bg-stone-100 p-1 border rounded-mg relative">
            <img src={image} className="h-24"></img>
            <div className="flex flex-col justify-around mx-2">
                <p className="text-slate-950 text-sm">{name}</p>
                <p className="text-slate-400 text-xs">Tamanho G</p>
                <p className="text-green-700 text-lg">{price}</p>
                <div className="flex text-slate-950 absolute right-2 bottom-0 mb-2">
                    <p className="p-2 w-8 mx-auto">{quantity}</p>
                </div>
            </div>
        </article>
    );
}
