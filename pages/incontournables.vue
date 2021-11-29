<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <b-col><h2>Les pâtisseries incontournables</h2></b-col>
          </b-row>
                
          <b-row>
            <b-col>
              <h3>Pour tous vos événements, petits et grands, passez commande à l'Atelier d'Héléna !</h3>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="text-justify">
              <p >Vous trouverez ci-dessous la cartes des pâtisseries incontournables : tartes, entremets, mignardises, petites envies et les spécialités pour la saison en cours (photos d’illustration, la décoration peut varier).
                Je vous propose des pâtisseries faites maison avec amour, des ingrédients soigneusement sélectionnés, de saison et locaux de préférence.</p>

              <p>Passez votre commande au plus tôt, au minimum 3 jours avant.<br/>
                Passé ce délai, n’hésitez pas à me contacter et nous verrons ensemble ce qu’il est possible de faire. </p>

              <p>Vous pouvez venir retirer vos pâtisseries à <ripaillettefb/> ou vous faire <nuxt-link to="#tarif">livrer*</nuxt-link> !</p>

              <p>Pour vos commandes et pour plus d’informations, il vous suffit d’envoyer un mail à <email/> ou de me contacter par téléphone au <telephone/> en précisant la date de l'évènement (midi ou soir), le nombre de convives et les éventuelles allergies.</p>
            </b-col>
          </b-row>

          <b-row class="mb-3 pt-3 border rounded p-2">
            <b-col class="text-justify">
              <b-row class="pb-2">
                <b-col>
                  <h3>TARTES & ENTREMETS</h3>
                </b-col>
              </b-row>

               <!-- <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="12">
                    <b-row>
                        <b-col align-self="center">
                            <b-img fluid src="~static/img/tarte-fraises.jpg" alt="Tarte aux fraises"></b-img>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col align-self="center" lg="6" sm="12">
                    <h4>Tarte aux fraises - 8 pers - 24€</h4>
                    <p>
                        Sablé breton, crème citron, fraises et zests de citron vert 
                    </p>
                    <p class="font-italic">Existe également en version individuelle. 3.5€ la pièce, par 4 minimum</p>
                </b-col>
              </b-row> -->

              <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="12">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/tarte-fruits-saison.jpg" alt="Tarte fruits saison"></b-img>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col align-self="center" lg="6" sm="12">
                    <h4>Tarte aux fruits de saison - 8 pers minimum</h4>
                    <p>
                        Pâte sablée, crémeux vanille et fruits de saison 
                    </p>
                    <p class="font-italic">Existe également en version individuelle. Par 4 minimum</p>
                </b-col>
              </b-row>

               <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="12">
                    <b-row>
                        <b-col align-self="center">
                            <b-img fluid src="~static/img/tarte-citron-meringuee.jpg" alt="Tarte citron meringuée"></b-img>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col align-self="center" lg="6" sm="12">
                    <h4>Tarte citron meringuée - 8 pers minimum</h4>
                    <p>
                        Pâte sablée, crémeux citron et meringue à l'italienne 
                    </p>
                    <p class="font-italic">Existe également en version individuelle. Par 4 minimum</p>
                </b-col>
              </b-row>

               <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="12">
                    <b-row>
                        <b-col align-self="center">
                            <b-img fluid src="~static/img/entremet-choco-noisette.jpg" alt="Entremets chocolat noisette"></b-img>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col align-self="center" lg="6" sm="12">
                    <h4>Entremets chocolat noisette - 8 pers minimum</h4>
                    <p>
                        Dacquoise noisette, croustillant praliné et mousse au chocolat noir 64%
                    </p>
                </b-col>
              </b-row>

               <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="12">
                    <b-row>
                        <b-col align-self="center">
                            <b-img fluid src="~static/img/entremet-citron.jpg" alt="Entremets mangue passion"></b-img>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col align-self="center" lg="6" sm="12">
                    <h4>Entremets mangue passion - 8 pers minimum</h4>
                    <p>
                        Streusel, biscuit moelleux citron, crémeux mangue passion, mousse mangue passion 
                    </p>
                </b-col>
              </b-row>

               <!-- <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="12">
                    <b-row>
                        <b-col align-self="center">
                            <b-img fluid src="~static/img/accueil/fraisier.jpg" alt="Fraisier ou Framboisier"></b-img>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col align-self="center" lg="6" sm="12">
                    <h4>Fraisier ou Framboisier - 8 pers - 36€</h4>
                    <p>
                        Génoise citron, crème diplomate vanille, fraises fraîches, zeste citron vert. Finition chantilly 
                    </p>
                </b-col>
              </b-row> -->

              <b-row class="pt-3 pb-2">
                <b-col>
                  <h3>MIGNARDISES</h3>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="6">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/plateaux-verrines-macarons-fetes-meres-2.png" alt="Plateaux de mignardises fêtes des mères - Panna cota"></b-img>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col align-self="center" lg="4" sm="6">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/financier-pistache.jpg" alt="Financier pistache"></b-img>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col align-self="center" lg="4" sm="6">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/plateau-choux-maracons.jpg" alt="Plateau de mignardises choux et macarons"></b-img>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="12" class="text-center">
                  <h4>Financiers pistache - par 6 minimum - 2€ la pièce</h4>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col class="text-center">
                  <p class="font-italic">Biscuit moelleux au doux parfum de pistache</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" class="text-center">
                  <h4>Mini verrines - par 12 minimum - 1.40€ la pièce</h4>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col class="text-center">
                  <p class="font-italic">Panna cotta à la vanille, coulis de fruits (exotique ou framboise)</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" class="text-center">
                  <h4>Petits choux - par 12 minimum - 1.25€ la pièce</h4>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col class="text-center">
                  <p class="font-italic">Au choix : crème vanille, crémeux chocolat noir 55% ou café</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" class="text-center">
                  <h4>Macarons - par 6 minimum - 1€ la pièce</h4>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col class="text-center">
                  <p class="font-italic">Au choix : passion/chocolat lait, citron, vanille/framboise</p>
                </b-col>
              </b-row>
 
              <b-row class="pt-3 pb-2">
                <b-col>
                  <h3>PETITES DOUCEURS</h3>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <b-col align-self="center" lg="4" sm="6">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/cookies.jpg" alt="Cookies"></b-img>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col align-self="center" lg="4" sm="6">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/cookies-2.png" alt="Cookies chocolat"></b-img>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col align-self="center" lg="4" sm="6">
                  <b-row>
                    <b-col align-self="center">
                      <b-img fluid src="~static/img/caramel-3.png" alt="Caramel mou"></b-img>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" class="text-center">
                  <h4>Gros Cookies - par 6 minimum - 1.5€ la pièce</h4>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col class="text-center">
                  <p class="font-italic">Au choix : Pépites de chocolat ou Double chocolat et fleur de sel</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" class="text-center">
                  <h4>Petit pot de caramel mou (200ml) - 5€</h4>
                </b-col>
              </b-row>
  
            </b-col>
          </b-row>
          
          <livraison/>

          <b-row class="pt-3">
            <b-col>
              <p class="text-justify">N'hésitez pas à me contacter si vous avez une question, si vous souhaitez des informations ou un devis&nbsp;:<br/>
                Par téléphone <telephone/><br/>
                Ou par e-mail <email/><br/>
              </p>
            </b-col>
          </b-row>

        </b-col>
      </b-row>
      </b-container>
  </div>
  
</template>

<script>
import Vue from 'vue'
import Entete from '~/components/Entete'
import Telephone from "~/components/Telephone"
import Ripaillettefb from "~/components/Ripaillettefb"
import Email from "~/components/Email"
import Livraison from "~/components/Livraison"
export default Vue.extend({
  components: {
    Entete,
    Ripaillettefb,
    Email,
    Telephone,
    Livraison
  }
})
</script>