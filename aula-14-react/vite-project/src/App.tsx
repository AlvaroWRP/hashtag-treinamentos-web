import { Header } from './components/header/Header';
import { Home } from './pages/homepage/Home';
import { Checkout } from './pages/checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContext';

export function App() {
    return (
        <CartContextProvider>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            </Routes>
        </CartContextProvider>
    );
}
