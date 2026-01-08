import logo from '../../assets/logo/hashtag.svg';
import { UserButtons } from '../user-buttons/UserButtons';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
    const fullHeader = (
        <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
            <Link to="/">
                <img className="h-16 px-2" src={logo}></img>
            </Link>
            <UserButtons></UserButtons>
        </header>
    );
    const simpleHeader = (
        <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
            <Link to="/">
                <img className="h-12 px-2" src={logo}></img>
            </Link>
        </header>
    );
    const { pathname } = useLocation();

    return <>{pathname === '/' ? fullHeader : simpleHeader}</>;
}
