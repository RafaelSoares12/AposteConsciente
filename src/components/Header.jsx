import styles from './Header.css'

export function Header(){
    return(
        <header>
            <a href="#" className="logo">Aposte Consciente</a>

            <ul className="navlist">
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Procure Ajuda</a></li>
            </ul>
        </header>
    );
}