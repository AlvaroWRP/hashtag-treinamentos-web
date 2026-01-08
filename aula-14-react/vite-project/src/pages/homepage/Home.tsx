import { Main } from './Main';
import { CartOverlay } from '../../components/cart/CartOverlay';

export function Home() {
    return (
        <>
            <CartOverlay></CartOverlay>
            <Main></Main>
        </>
    );
}
