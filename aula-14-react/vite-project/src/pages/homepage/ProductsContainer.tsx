import { data } from '../../../data';
import { ProductsCard } from './ProductsCard';

export function ProductsContainer({ searchParams }) {
    return (
        <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
            {(searchParams.get('filterby') !== null
                ? data.filter(
                      (product) => product.feminine === (searchParams.get('filterby') === 'fem'),
                  )
                : data
            ).map((product) => (
                <ProductsCard key={product.id} {...product}></ProductsCard>
            ))}
        </section>
    );
}
