import { Header } from './components/header/Header';
import { Card } from './components/profile/Card';
import { Footer } from './components/footer/Footer';
import '../styles.css';

export function App() {
    return (
        <>
            <Header></Header>
            <div className="app">
                <Card
                    image="https://randomuser.me/api/portraits/women/23.jpg"
                    name="Joana Banana"
                    job="Vendedora de banana"
                    phone="+55 (11) 9 1234-5678"
                    email="joanabanana@gmail.com"
                    github="https://github.com/"
                    linkedin="https://www.linkedin.com/"
                    instagram="https://www.instagram.com/"
                ></Card>
                <Card
                    image="https://randomuser.me/api/portraits/men/9.jpg"
                    name="João Mamão"
                    job="Vendedor de mamão"
                    phone="+55 (11) 9 1234-5678"
                    email="joaomamao@gmail.com"
                    github="https://github.com/"
                    linkedin="https://www.linkedin.com/"
                    instagram="https://www.instagram.com/"
                    theme="male"
                ></Card>
                <Card
                    image="https://randomuser.me/api/portraits/women/15.jpg"
                    name="Angelina Pecorina"
                    job="Usuária de aspirina"
                    phone="+55 (11) 9 1234-5678"
                    email="angelinapecorina@gmail.com"
                    github="https://github.com/"
                    linkedin="https://www.linkedin.com/"
                    instagram="https://www.instagram.com/"
                ></Card>
                <Card
                    image="https://randomuser.me/api/portraits/men/17.jpg"
                    name="Marcos"
                    job="Desempregado"
                    phone="+55 (11) 9 1234-5678"
                    email="marcao123@gmail.com"
                    github="https://github.com/"
                    linkedin="https://www.linkedin.com/"
                    instagram="https://www.instagram.com/"
                    theme="male"
                ></Card>
            </div>
            <Footer></Footer>
        </>
    );
}
