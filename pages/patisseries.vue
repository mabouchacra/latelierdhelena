<template>
    <div class="container-fluid">
        <entete/>

        <b-container>
        
        <b-row>
            <b-col>
                <b-row class="pb-3">
                    <b-col>
                        <h2>Commandez les patisseries de vos envies !</h2>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col>
                    <h3>Pour tous vos événements, petits et grands, passez commande à l'Atelier d'Héléna !</h3>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col class="text-justify">
                    <p >Vous trouverez ci-dessous les incontournables : tartes, number cakes, entremets, mignardises, petites envies et les spécialités pour la saison en cours (photos d’illustration, la décoration peut varier).<br/>
                     Je vous propose des pâtisseries faites maison avec amour, des ingrédients soigneusement sélectionnés, de saison et locaux de préférence.</p>

                    <p>Passez votre commande au plus tôt, si possible 5 jours à l’avance. Passé ce délai, n’hésitez pas à me contacter et nous verrons ensemble ce qu’il est possible de faire. </p>

                    <p>Vous pouvez venir retirer vos pâtisseries à <ripaillettefb/> ou vous faire <nuxt-link to="/maintenant#tarif">livrer*</nuxt-link> !</p>

                    <p>Pour vos commandes et pour plus d’informations, il vous suffit d’envoyer un mail à <a href="mail:contact@latelierdhelena.fr">contact@latelierdhelena.fr</a> ou de mon contacter par téléphone au <a href="tel:+33682528727">06 82 52 87 27</a> en précisant la date de l'évènement (midi ou soir), le nombre de convives et les éventuelles allergies.</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <carte/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        
        </b-container>
    </div>
</template>

<script>

import Ripaillettefb from "~/components/Ripaillettefb"
import Entete from '~/components/Entete'
import Carte from '~/components/Carte'

export default {
    components: {
            Entete,
            Ripaillettefb,
            Carte
    }
}
</script>