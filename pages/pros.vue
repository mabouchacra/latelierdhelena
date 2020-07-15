<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <b-col><h2>Le coin des professionnels</h2></b-col>
          </b-row>
          <b-row>
            <b-col class="text-justify">
              <p>Vous êtes un professionnel et vous avez besoin d'aide dans votre quotidien, ou lors de vos pics d'activités : l'Atelier d’Héléna est là  en travaillant directement chez vous ou en réalisant des commandes dans mon laboratoire.</p>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <p class="text-justify">N'hésitez pas à me contacter si vous avez une question ou si vous souhaitez des informations ou un devis.</p>
              <p class="text-justify">
                Par téléphone <telephone/><br/>
                Ou par e-mail <email/><br/>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-img fluid src="~static/img/pros.jpg" alt="Plateaux de mignardises pour différents évènements (baptême, mariage, anniversaire)"></b-img>
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