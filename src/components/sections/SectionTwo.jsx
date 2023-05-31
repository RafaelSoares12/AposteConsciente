import styles from './SectionTwo.css'

export function SectionTwo(){
    return(
        <section className="help-you-2">
            <div className="main-content-2">
                <h1>Como ajudar um terceiro</h1>
                <p>Pode ser difícil saber o que dizer a alguém que está jogando. Freqüentemente, eles podem não perceber que têm um problema ou podem estar se convencendo de que têm seu jogo sob controle quando não o fazem. </p>
                
                <h2><a href="#">Saiba mais</a></h2>
            </div>
            <div className="main-img-2">
                <img src="img-support.svg" alt="" />
            </div>
        </section>
    );
}