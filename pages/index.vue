<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <h1>L'atelier d'Héléna - Pâtisseries fines et gourmandes</h1>
            <b-col><h2>Bienvenue à l'Atelier d'Héléna !</h2></b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="text-justify">​Pour un anniversaire, un goûter,  un repas, un mariage, ou juste pour une petite envie de se faire plaisir, L'Atelier d’Héléna s'occupe de tout ! Commandez vos pâtisseries et passez les récupérer à <ripaillettefb/>, ou faites vous directement livrer à votre domicile ou sur votre lieu de travail par exemple.<br/>
​Mes pâtisseries, légères en sucre et gourmandes, sont artisanales et faites maison avec amour. J’utilise des produits frais, de saison, les plus locaux et naturels possible, en favorisant au maximum les circuits courts auprès des fournisseurs et minimisant les déchets. Je  propose une pâtisserie adaptée à vos événements, et personnalisable.</p>

              <p class="text-justify">Pas de biscuits ni de confitures industriels ou surgelés. La carte est actualisée en fonction des saisons, afin de proposer un maximum de produits frais. Toutes mes pâtisseries sont réalisées à la commande, dans mon atelier.</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <caroussel/>
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
import Ripaillettefb from "~/components/Ripaillettefb"
import Caroussel from '~/components/Caroussel'

export default Vue.extend({
  components: {
    Entete,
    Ripaillettefb,
    Caroussel
  }
})
</script>
