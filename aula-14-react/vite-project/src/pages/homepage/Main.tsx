import { ProductsContainer } from './ProductsContainer';
import { ProductsFilter } from './ProductsFilter';
import { useSearchParams } from 'react-router-dom';

export function Main() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <ProductsFilter setSearchParams={setSearchParams}></ProductsFilter>
            <ProductsContainer searchParams={searchParams}></ProductsContainer>
        </>
    );
}
