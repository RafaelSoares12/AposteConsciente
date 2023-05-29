import styles from './Content.css'

export function Content(){
    return(
        <section className="content">
            <div className="content-text">
                <h1>Se você está preocupado com o que o jogo faz você se sentir, podemos ajudar</h1>
                <p>Nosso breve questionário leva alguns minutos para ser concluído e começará a fornecer uma visão de como o jogo pode estar afetando você ou alguém de quem você gosta. Depois de concluído, você receberá suporte personalizado, caso deseje.</p>
                <br />
                <a href="#">Preencha o formulario</a>
            </div>
            <div className="content-img">
                <img src="public/img-homem-frustrado.png" alt="" />
            </div>
        </section>
            // <RedeNacional/>
            // <Contato/>
    );
}