<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <b-col><h3>La carte du moment</h3></b-col>
          </b-row>
          <b-row class="mb-3 pt-3 border rounded p-2">
            <b-col class="text-justify">
              <b-row class="pb-2">
                <b-col>
                  <h4>TARTES & ENTREMETS</h4>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="12" md="6">
                  <h5 class="font-weight-bolder">Tarte aux fraises - 6 pers</h5>
                </b-col>
                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">21€</h5>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col>
                  <p class="font-italic">Sablé breton, crème vanille, fraises et citron vert</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" md="6">
                  <h5><span class="font-weight-bolder">Tartelette citron meringuée </span>(minimum 4 pcs)</h5>
                </b-col>

                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">3.5€/pcs</h5>
                </b-col>
              </b-row>
  
  
              <b-row>
                <b-col>
                  <p class="font-italic">Pâte sablée, crémeux citron et meringue à l’italienne</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" md="6">
                  <h5 class="font-weight-bolder">Entremets chocolat noisette - 6 pers</h5>
                </b-col>

                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">24€</h5>
                </b-col>
              </b-row>
  
  
              <b-row>
                <b-col>
                  <p class="font-italic">Dacquoise noisette, croustillant praliné et crémeux au chocolat noir 64%</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" md="6">
                  <h5 class="font-weight-bolder">Entremets mangue passion - 6 pers</h5>
                </b-col>

                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">24€</h5>
                </b-col>
              </b-row>
  
  
              <b-row>
                <b-col>
                  <p class="font-italic">Streusel, biscuit moelleux citron, crémeux mangue passion, mousse mangue passion</p>
                </b-col>
              </b-row>
 
              <b-row class="pt-3 pb-2">
                <b-col>
                  <h4>MIGNARDISES</h4>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" md="6">
                  <h5><span class="font-weight-bolder">Trio de mini financiers </span></h5>
                </b-col>

                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">7.5€</h5>
                </b-col>
              </b-row>
  
              <b-row>
                <b-col>
                  <p class="font-italic">2 framboise, 2 pépite de chocolat, 2 pistache</p>
                </b-col>
              </b-row>
 
              <b-row class="pt-3 pb-2">
                <b-col>
                  <h4>PETITES DOUCEURS</h4>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" md="6">
                  <h5><span class="font-weight-bolder">Coffret petits brownies</span> (6 pcs)</h5>
                </b-col>

                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">9€</h5>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p class="font-italic">Chocolat et noisettes entières torréfiées</p>
                </b-col>
              </b-row>
 
              <b-row>
                <b-col sm="12" md="6">
                  <h5><span class="font-weight-bolder">Petit pot de caramel mou (100ml)</span></h5>
                </b-col>

                <b-col sm="12" md="6" class="text-center">
                  <h5 class="font-weight-bolder">2.5€</h5>
                </b-col>
              </b-row>

            </b-col>
          </b-row>

          <b-row>
            <b-col>
                <p class="">A commander 3 jours à l’avance par mail <email/> ou par téléphone <telephone/>.<br/>
                Minimum 20€ de commande.<br/>
                Paiement par carte bancaire ou par virement possible.<br/>
                Vous pouvez venir retirer vos pâtisseries à <ripaillettefb/> ou vous faire <a href="#tarif">livrer*</a> !</p>
                <p><span class="font-weight-bolder">En ce moment, la livraison est gratuite jusqu’à 15 km (maximum) autour du labo (situé à Cestas Gazinet) les vendredi, samedi et dimanche. Les autres jours, me contacter pour les disponibilités.</span>
                </p>
            </b-col>
          </b-row>
          
          <b-row>
            <b-col>
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

          <b-row class="pt-3">
            <b-col>
              <p class="text-justify">N'hésitez pas à me contacter si vous avez une question ou si vous souhaitez des informations ou un devis.<br/>
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
export default Vue.extend({
  components: {
    Entete,
    Ripaillettefb,
    Email,
    Telephone,
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
})
</script>