<template>
    <div class="container-fluid">
        <entete/>

        <b-container>
        
        <b-row>
            <b-col>
                <b-row class="pb-3">
                    <b-col>
                        <h2>Les pâtisseries personnalisées</h2>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col>
                    <h3>Commandez les pâtisseries de vos envies !</h3>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col class="text-justify">
                    <p >Number cakes, plateaux de mignardises ou autre pâtisseries personnalisées, à vous de choisir, faites-vous plaisir !
                    </p>

                    <p>Passez votre commande au plus tôt, si possible 1 semaine avant. Passé ce délai, n’hésitez pas à me contacter et nous verrons ensemble ce qu’il est possible de faire. </p>

                    <p>Vous pouvez venir retirer vos pâtisseries à <ripaillettefb/> ou vous faire <nuxt-link to="#tarif">livrer*</nuxt-link> !</p>

                    <p>Pour vos commandes et pour plus d’informations, il vous suffit d’envoyer un mail à <email/> ou de me contacter par téléphone au <telephone/> en précisant la date de l'évènement (midi ou soir), le nombre de convives et les éventuelles allergies.</p>

                    <p>Vous trouverez ci-dessous la carte des pâtisseries personnalisées (photos d’illustration, la décoration peut varier).</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <carte/>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col>
                        <livraison/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        
        </b-container>
    </div>
</template>

<script>

import Telephone from "~/components/Telephone"
import Ripaillettefb from "~/components/Ripaillettefb"
import Email from "~/components/Email"
import Entete from '~/components/Entete'
import Carte from '~/components/Carte'
import Livraison from "~/components/Livraison"

export default {
    components: {
        Entete,
        Ripaillettefb,
        Carte,
        Email,
        Telephone,
        Livraison
    }
}
</script>