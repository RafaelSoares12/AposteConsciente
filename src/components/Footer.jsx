import styles from './Footer.css'

export function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>Aposte Consciente</h1>
                    <p>Desenvolvidor por Rafael Soares em <br />parceria com The Smart Bettor</p>
                </div>
                
                <ul className="footer-list">
                    <li>
                        <h3>Links úteis</h3>
                    </li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <h3>Links úteis</h3>
                    </li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <h3>Links úteis</h3>
                    </li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>

            <div className="footer-copyright">

                <p>© 2023 Todos os direitos reservados</p>
            </div>

        </footer>
    );
}