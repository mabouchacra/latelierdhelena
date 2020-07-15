<template>
    <b-row>
        <b-col>
            <b-row>
                <b-col id="tarif">
                    <b-card title="* Grille tarifaire de livraison" sub-title="Selon disponibilité. En ce moment, la livraison est gratuite à partir de 20€ de commande et jusqu’à 15 km autour du labo (situé à Cestas Gazinet) les vendredi, samedi et dimanche.">
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
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
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