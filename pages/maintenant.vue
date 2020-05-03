<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <b-col><h3>La carte du moment</h3></b-col>
          </b-row>
          <b-row>
            <b-col class="text-justify">
                <h5><span class="font-weight-bolder">Tarte aux fraises - 6 pers - 21€</span></h5>
                <p>Sablé breton, crème vanille, Fraises et citron vert</p>
 
                <h5><span class="font-weight-bolder">Entremets tout citron - 6 pers - 24€</span></h5>
                <p>Biscuit moelleux citron, crémeux citron, mousse citron, glaçage jaune</p>
 
                <h5><span class="font-weight-bolder">Petites douceurs</span></h5>
                <p>6 petits brownies chocolat et noisettes - 9€</p>
                <p>Trio de mini financiers : 2 framboise, 2 pépite de chocolat, 2 pistache - 7,5€</p>
                <p>Petit pot de caramel mou (100mL) - 5€</p>
 
                <p class="pt-4">A commander 3 jours à l’avance par mail <email/> ou téléphone par <telephone/><br/>
                Minimum 20€ de commande.<br/>
                Paiement par carte bancaire ou par virement possible.<br/>
                Vous pouvez venir retirer vos commandes directement au laboratoire (en respectant les normes de sécurité)<br/>
                En ce moment, livraison gratuite jusqu’à 15 km (maximum) autour du labo (situé à Cestas Gazinet) les vendredi, samedi et dimanche. Les autres jours me contacter pour les disponibilités.
                </p>
            </b-col>
          </b-row>

          <b-row>
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
import Email from "~/components/Email"
export default Vue.extend({
  components: {
    Entete,
    Email,
    Telephone,
  }
})
</script>