import styles from './Section.css'

export function Section(){
    return(
        <section className="help-you">
            <div className="main-content">
                <h1>Como ajudar a você mesmo</h1>
                <p>Na seção "Como ajudar a você mesmo", você encontrará recursos e estratégias que podem ser úteis para lidar com o jogo excessivo e promover uma abordagem mais responsável. </p>
                
                <h3>Encontre o suporte certo para você</h3>
                <h2><a href="#">Saiba mais</a></h2>
            </div>
            <div className="main-img">
                <img src="public/img-support.svg" alt="" />
            </div>
        </section>
    );
}