import styles from './Section.css'

export function Section(){
    return(
        <section className="help-you">
            <div className="main-content">
                <h1>The National Gambling Support Network</h1>
                <p>The National Gambling Support Network, formerly known as, 'The National Gambling Treatment Service', is a group of organisations across Great Britain who provide free, confidential and personalised support for anyone who’s experiencing problems from gambling, as well as those affected by someone else’s gambling.</p>
                <p>If you're worried about your own or someone else's gambling, this service is totally free to access, 24 hours a day, 7 days a week.</p>
                
                <h3>Find the right support for you</h3>
                <h2><a href="#">Saiba mais</a></h2>
            </div>
            <div className="main-img">
                <img src="public/img-support.svg" alt="" />
            </div>
        </section>
    );
}