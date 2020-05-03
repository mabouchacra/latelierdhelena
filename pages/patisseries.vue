<template>
    <div class="container-fluid">
        <entete/>

        <b-container>
        
        <b-row>
            <b-col>
                <b-row class="pb-3">
                    <b-col>
                        <h3>Commandez les patisseries de vos envies !</h3>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col>
                    <h4>Pour tous vos événements, petits et grands, passez commande à l'Atelier d'Héléna !</h4>
                    </b-col>
                </b-row>
                
                <b-row>
                    <b-col class="text-justify">
                    <p >Vous trouverez ci-dessous les incontournables : tartes, number cakes, entremets, mignardises, petites envies et les spécialités pour la saison en cours (photos d’illustration, la décoration peut varier).<br/>
                     Je vous propose des pâtisseries faites maison avec amour, des ingrédients soigneusement sélectionnés, de saison et locaux de préférence.</p>

                    <p>Passez votre commande au plus tôt, si possible 5 jours à l’avance. Passé ce délai, n’hésitez pas à me contacter et nous verrons ensemble ce qu’il est possible de faire. </p>

                    <p>Vous pouvez venir retirer vos pâtisseries à <ripaillettefb/> ou vous faire <a href="#tarif">livrer*</a> !</p>

                    <p>Pour vos commandes et pour plus d’informations, il vous suffit d’envoyer un mail à <a href="mail:contact@latelierdhelena.fr">contact@latelierdhelena.fr</a> ou de mon contacter par téléphone au <a href="tel:+33682528727">06 82 52 87 27</a> en précisant la date de l'évènement (midi ou soir), le nombre de convives et les éventuelles allergies.</p>
                    </b-col>
                </b-row>
                <b-row class="pb-3">
                    <b-col>
                        <carte/>
                    </b-col>
                </b-row>

                <b-row>
                <b-col>
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
                                <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3€/la part.</b-card-text>
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
                                <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3€/la part.</b-card-text>
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
                                <b-card-text><span class="font-weight-bold">Disponible en 8 ou 12 pers, 2,50€/la part.</span>
<br/>
<span class="font-italic font-weight-bold">​+ 0,50€/part pour un supplément crumble ou caramel au beurre salé.</span></b-card-text>
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
                                ​Streusel, moelleux citron, crémeux citron basilic, mousse ivoire citron vert.
                                </b-card-text>
                                <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3,50€/la part.</b-card-text>
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
                                <b-card-text class="font-weight-bold">Disponible en 8 ou 12 pers, 3,50€/la part.</b-card-text>
                                <b-card-text class="font-weight-bold">Disponible aussi en mignardises : 1,25€/pièce, par 12 pièces minimum.</b-card-text>
                            </b-card>
                            </div>
                    </b-col>
                </b-row>
            <b-row>
            <b-col id="tarif">
                <b-card title="* Grille tarifaire de livraison" sub-title="Selon disponibilité">
                    <b-card-text>
                        <template>
                            <div>
                                <b-table hover :items="items"></b-table>
                            </div>
                        </template>
                    </b-card-text>
                </b-card>
            </b-col>
            </b-row>

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
    },
    data() {
      return {
        items: [
          { zone: 0, distance: 'Laboratoire', prix: '0€' },
          { zone: 1, distance: 'Jusqu’à 5km', prix: '3€' },
          { zone: 2, distance: 'De 5 à 10km', prix: '4.5€' },
          { zone: 3, distance: 'De 10 à 15km', prix: '6€' },
          { zone: 4, distance: 'De 15 à 20km', prix: '8€' },
          { zone: 5, distance: 'Plus de 20km', prix: 'Nous consulter' },
        ]
      }
    }
}
</script>