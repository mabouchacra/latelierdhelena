<template>
    <b-container>
        <b-row class="pb-3">
            <b-col>
                <b-row class="pt-3 border rounded p-2">
                    <b-col align-self="center" lg="6" sm="12">
                        <b-row class="">
                            <b-col align-self="center">
                                <b-img fluid src="~static/img/number-cake-70.jpg" alt="Number cake 70 vanille fruits exotiques"></b-img>
                            </b-col>
                            <b-col align-self="center">
                                <b-img fluid src="~static/img/number-cake-coeur.jpg" alt="Number cake coeur vanille fruits rouges"></b-img>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col align-self="center">
                                <b-img fluid src="~static/img/number-cake-k.jpg" alt="Number cake lettre K vanille fruits rouges"></b-img>
                            </b-col>
                            <b-col align-self="center">
                                <b-img fluid src="~static/img/number-cake-30.jpg" alt="Number cake 30 citron meringué"></b-img>
                            </b-col>
                        </b-row>
                    </b-col>

                    <b-col lg="6" sm="12">
                        <h3>NUMBER CAKES</h3>
                        <p>​Le gâteau parfait pour fêter un anniversaire ! </p>
                        <p>Composé de deux couches de biscuit sablé en forme de chiffre de lettre ou autre (couronne, cœur, etc.) et une ou deux crème(s) ou ganache(s) montée(s).<br/>
                            Au choix :
                            <ul>
                                <li>Vanille</li>
                                <li>Chocolat, </li>
                                <li>Ganache fruité, </li>
                                <li>Chocolat praliné, </li>
                                <li>Citron meringuée.</li>
                            </ul>
                            La décoration peut être faite avec des fruits frais, des macarons, des petites meringues et autres douceurs (petits sablés, bonbons chocolat...)
                        </p>
                        <p class="font-weight-bold">1 gâteau correspond à un 10 personnes.</p>
                        <p class="font-weight-bold">À partir de 5€/part</p>
                    </b-col>
                </b-row>

            </b-col>
        </b-row>

        <b-row class="mb-3 border rounded p-2">
            <b-col align-self="center" lg="6" sm="12">
                <b-row class="pb-1">
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/plateau-mignardises-financier-choux.jpg" alt="Number cake 70 vanille fruits exotiques"></b-img>
                    </b-col>
                </b-row>
                <b-row class="">
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/plateau-mignardises-citron-choco.jpg" alt="Number cake coeur vanille fruits rouges"></b-img>
                    </b-col>
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/plateau-mignardises-number-cake.jpg" alt="Number cake lettre K vanille fruits rouges"></b-img>
                    </b-col>
                </b-row>
            </b-col>

            <b-col align-self="center" lg="6" sm="12">
                <h3>PLATEAUX DE MIGNARDISES</h3>
                <p>
                    Composez votre plateau de mignardises, avec au choix : 
                    <ul>
                        <li>Verrines</li>
                        <li>Petits choux</li>
                        <li>Mini tartelettes</li>
                        <li>Mini financiers</li>
                        <li>Mini entremets chocolat</li>
                        <li>Mini cupcakes</li>
                    </ul>
                </p>
                <p class="font-weight-bold">3 mignardises différentes minimum, 10 pièces de chaque.
                </p>
                <p class="font-italic">Contactez-moi pour un devis.</p>
            </b-col>
        </b-row>
        <gateauxPersonnalises/>

    </b-container>
</template>

<script>

import GateauxPersonnalises from "~/components/GateauxPersonnalises"

export default {
    components: {
            GateauxPersonnalises
    }
}
</script>