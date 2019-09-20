import React from "react"

export default (props) => {
    return(
        <section class="newsletter" id="newsletter">
            <div class="inner">
                <h2>Zapisz się na newsletter</h2>
                <p>
                Dzięki Newsletterowi WordPressówki będziesz na bieżąco z informacjami na temat WordPressa! Jako pierwszy dowiesz się o nowym wydaniu. Dołącz do naszych subskrybentów! :)
                </p>
            </div>

            <form action="https://wordpressowka.us20.list-manage.com/subscribe/post?u=bc1349d1dfefba72bdd8c3974&amp;id=f8311d93e4" method="post" name="mc-embedded-subscribe-form" class="validate">
                <label><input type="name" placeholder="Twoje imię" name="NAME" required /></label>
                <label><input type="email" placeholder="Twój adres email" name="EMAIL" required /></label>
                <input type="submit" value="Zapisz się teraz!"  name="subscribe" />
            </form>

            <div class="inner small">
                <p>Zapisując się na newsletter zgadzam się na otrzymywanie Newslettera od WordPressówki.</p>
                <p>Po naciśnięciu „Zapisz się teraz!" otrzymasz na swój adres e-mail prośbę o potwierdzenie zapisu.</p>
            </div>
        </section>
    ) 
}
