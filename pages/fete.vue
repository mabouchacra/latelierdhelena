<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <b-col><h3>Menu spécial fêtes des pères !</h3></b-col>
          </b-row>
          <b-row>
            <b-col sm="12" lg="6">
              <b-img center fluid src="~/static/img/fete-des-peres.PNG" alt="menu fête des pères"></b-img>
            </b-col>
            <b-col  sm="12" lg="6" class="pt-3 text-justify">
              <p>
                Comme vous me l’avez beaucoup demandé après le succès de la fête des mères, j’ai décidé de faire aussi quelque chose pour gâter 
                vos papas. La fête des pères approche à grands pas !
              </p>

              <p>
                Pour changer des cadeaux habituels, et parce que nos papas aussi ont le droit à leur dose de douceur, 
                je vous propose cette fois ci 2 formules gourmandes autour des fruits exotiques, disponible uniquement pour le week-end du 20-21 juin.
              </p>
              
              <p>
                Comme d’habitude, elles seront préparées avec beaucoup d’amour sur commande uniquement.
              </p>

              <h5>Number cake en forme de couronne*, 6 pers - 24 €</h5>
              <ul>
                <li>pâte sucrée</li>
                <li>crème vanille</li>
                <li>crémeux mangue passion</li>
                <li>fruits exotiques</li>
                <li>éclats de chocolat au lait</li>
              </ul>
              <p class="font-italic">* possibilité également de faire ce number cake avec des fruits rouges</p>
              
              <h5>Boîte de petites douceurs, 26€</h5>
              <ul>
                  <li>6 macarons: 3 chocolat au lait passion, 3 mangue passion</li>
                  <li>4 moelleux avec une petite touche de rhum, crème vanille et fruits exotiques</li>
                  <li>4 minis panna cotta fruits exotiques</li>
                  <li>2 sablés imprimés  Papa et Super Dad au chocolat noir</li>
                  <li>1 pot de caramel maison (200ml)</li>
              </ul>
              
              <p>
                Pour accompagner ce bon dessert et gâter un peu plus nos papas, Cyrille (entreprise Millésimes 2000) vous propose 
                une délicieuse bouteille de vin, parmi les suivantes
              </p>

              <h5>Château Haut Couloumey  - Cuvée Prestige - AOC Médoc, composé de Merlot 86% • Cabernet Sauvignon 7% • Cabernet Franc 7%, 10€/bouteille</h5>
              <p>Nez de fruit noir, cassis, mûre et légèrement épicé. Goût riche avec des tanins doux et une finale persistante.</p>

              <h5>Riviera Bistro rosé par le domaine de Cantarelle - AOP Côteaux Varois en Provence, 8€/bouteille</h5>
              <p>Une sensation de légèreté et de naturel, des arômes fruités en toute simplicité. Une agréable fraîcheur et un développement épicé.</p>

              <h5>Lot de deux bouteilles: 18€</h5>

              <p>
                Pour plus d’informations sur les vins, n’hésitez pas à contacter Cyrille par mail <a href="mailto:cyrilgraduch@gmail.com">cyrilgraduch@gmail.com</a>.
              </p>
            </b-col>
          </b-row>

          <b-row class="pt-3">
              <b-col>
                <p>
                    Le nombre de commandes sera limité alors ne tardez pas à passer votre commande.<br/>
                    Réservation jusqu'au mercredi 17 juin par mail <email/> ou par téléphone <telephone/>.
                </p>
                
                <p>
                    Paiement possible par carte bancaire ou virement.<br>
                    Vous pouvez venir retirer vos pâtisseries à <ripaillettefb/> ou vous faire livrer (selon disponibilité) ! La livraison (15 km maximum autour de l’atelier) est gratuite.<br/>

                    Possibilité d'écrire un message personnalisé si vous souhaitez que la livraison soit une surprise pour votre papa.
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
import Email from '~/components/Email'
import Telephone from "~/components/Telephone"
import Ripaillettefb from "~/components/Ripaillettefb"

export default Vue.extend({
  components: {
    Entete,
    Ripaillettefb,
    Email,
    Telephone
  }
})
</script>
