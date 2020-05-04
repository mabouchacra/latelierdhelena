<template>
    <b-container>
        <b-row class="pb-3">
            <b-col>
                <b-row class="pt-3 border rounded p-2">
                    <b-col align-self="center" lg="6" sm="12">
                        <b-img fluid center src="~static/img/number-cake.webp"></b-img>
                    </b-col>

                    <b-col lg="6" sm="12">
                        <h4>Number cake</h4>
                        <p>
                            ​Le gâteau parfait pour fêter un anniversaire ! <br/>
                            Composé de deux couches de biscuit sablé en forme de chiffre de lettre ou autre (couronne, cœur, etc.) et une ou deux crème(s) ou ganache(s) montée(s).<br/>
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
                        <p class="font-weight-bold">
                            1 gâteau correspond à un 10 personnes<br/>
                            <!-- 40€ pour un gâteau, 75€ pour 2 (+ 5€, si garnitures différentes) -->
                        </p>
                    </b-col>
                </b-row>

            </b-col>
        </b-row>

        <b-row>
            <b-col class="pb-3" lg="4" sm="12">
                <div>
                    <b-card
                        title="Tarte citron meringué"
                        img-src="~static/img/tarte-citron-meringue.webp"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Une pâte sablée fondante recouverte d'un crémeux au citron et d'une meringue à l’italienne.
                        </b-card-text>
                        <!-- <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3€/la part.</b-card-text> -->
                    </b-card>
                    </div>
            </b-col>
            <b-col class="pb-3" lg="4" sm="12">
                <div>
                    <b-card
                        title="​Tarte aux fruits de saison"
                        img-src="~static/img/tarte-fruit-saison.webp"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Une pâte sucrée croquante recouverte d'une crème vanille et de fruits frais de saison.
                        </b-card-text>
                        <!-- <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3€/la part.</b-card-text> -->
                    </b-card>
                    </div>
            </b-col>
            <b-col class="pb-3" lg="4" sm="12">
                <div>
                    <b-card
                        title="Tarte fine aux pommes"
                        img-src="~static/img/tarte-pomme.webp"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                            Sur une fine tarte ronde ou rectangle à la noisette se mêlent compote de pommes et pommes !
                        </b-card-text>
                        <b-card-text>
                            <!-- <span class="font-weight-bold">Disponible en 8 ou 12 pers, 2,50€/la part.</span><br/>
                            <span class="font-italic font-weight-bold">​+ 0,50€/part pour un supplément crumble ou caramel au beurre salé.</span> -->
                        </b-card-text>
                    </b-card>
                    </div>
            </b-col>
            <b-col class="pb-3" lg="4" sm="12">
                <div>
                    <b-card
                        title="​Entremets tout Citron"
                        img-src="~static/img/entremet-citron.webp"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        ​Streusel, moelleux citron, crémeux citron, mousse ivoire citron vert.
                        </b-card-text>
                        <!-- <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3,50€/la part.</b-card-text> -->
                    </b-card>
                    </div>
            </b-col>
            <b-col class="pb-3" lg="4" sm="12">
                <div>
                    <b-card
                        title="​Entremets Chocolat Noisettes"
                        img-src="~static/img/entremet-choco-noisette.webp"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>​Un délicieux crémeux au chocolat noir 64%, un croustillant praliné et une dacquoise noisette.</b-card-text>
                        <!-- <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3,50€/la part.</b-card-text>
                        <b-card-text class="font-weight-bold">Disponible aussi en mignardises : 1,25€/pièce, par 12 pièces minimum.</b-card-text> -->
                    </b-card>
                    </div>
            </b-col>
        </b-row>

        <b-row class="mb-3 border rounded p-2">
            <b-col align-self="center" lg="6" sm="12">
                <b-row>
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/plateaux-mignardises.webp"></b-img>
                    </b-col>
                </b-row>
            </b-col>

            <b-col align-self="center" lg="6" sm="12">
                <h4>Mignardises</h4>
                <p>
                    Choisissez vos mignardises par catégorie : 
                    <ul>
                        <li>Verrines</li>
                        <li>Petits choux</li>
                        <li>Mini tartelettes</li>
                        <li>Mini financiers</li>
                        <li>Mini entremets chocolat</li>
                        <li>Mini cupcakes</li>
                    </ul>
                </p>
                <p class="font-weight-bold">12 pièces minimum</p>
                <p>
                    Ou composer votre plateau de mignardises
                </p>
                <p class="font-weight-bold">3 mignardises différentes minimum, 10 pièces de chaque
                    <!-- Chaque gâteau est unique et le prix dépend de ce que vous souhaitez en terme de goût et de décoration. -->
                </p>
            </b-col>
        </b-row>

        <b-row class="mb-3 border rounded p-2">
            <b-col align-self="center" lg="6" sm="12">
                <b-row class="">
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/cookies.webp"></b-img>
                    </b-col>
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/mini-crepes.webp"></b-img>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/mini-cupcakes-framboise.webp"></b-img>
                    </b-col>
                    <b-col align-self="center">
                        <b-img fluid src="~static/img/brownie.webp"></b-img>
                    </b-col>
                </b-row>
            </b-col>

            <b-col align-self="center" lg="6" sm="12">
                <h4>Petites douceurs</h4>
                <p>
                    Choisissez vos petites douceurs : 
                    <ul>
                        <li>Cookies</li>
                        <li>Mini crêpes</li>
                        <li>Brownies</li>
                        <li>Paris brest</li>
                        <li>Cupcakes</li>
                        <li>Caramel</li>
                    </ul>
                </p>
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