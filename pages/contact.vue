<template>
  <div class="container-fluid">
      <entete/>

      <b-container>
      <b-row>
        <b-col>
          <b-row class="pb-3">
            <b-col><h3>Qui suis-je ?</h3></b-col>
          </b-row>
          <b-row>
            <b-col class="text-justify">
              <p>Je m'appelle Héléna, j’ai 33 ans, je suis mariée et maman de deux merveilleux petits garçons.<br/>
J’ai toujours aimé cuisiner et faire des gâteaux, mais il a fallu attendre mes 32 ans pour me rendre compte que c’était vraiment quelque chose qui me passionnait et que je pouvais le partager au plus grand nombre. En effet, il y a encore quelques mois, j’exerçais la profession de responsable qualité d’un logiciel informatique dans le biomédical.</p>
              <p class="text-justify">
                J’ai donc passé un CAP pâtissier en  alternance sur 1 an au lycée hôtelier de Talence, en multipliant les expériences professionnelles : dans une  pâtisserie A la folie à Pessac, dans l'équipe de Franck Labasse, ... En parallèle, je lance ma page facebook <a href="https://www.facebook.com/atelierdhelena" target="_blank">L'atelier d'Héléna</a>, afin de partager mes réalisations au plus grand nombre. Attachée à la technique et aux bons produits, j’ai à cœur de proposer des recettes de saison et légères en sucre mais sans jamais oublier la gourmandise ! Me voilà aujourd’hui Ingénieur - Pâtissière - Entrepreneuse. Que l'aventure commence !
              </p>
            </b-col>
            <b-col>
              <b-img center fluid src="~/static/img/helena.webp" alt="Héléna Arguillot" rounded="circle"></b-img>
            </b-col>
          </b-row>

          <b-row>
            <b-col><h3>Contact</h3></b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="text-justify">N'hésitez pas à me contacter si vous avez une question ou si vous souhaitez des informations.</p>
              <p class="text-justify">
                Héléna - L'atelier d'Héléna<br/>
                <telephone/><br/>
                <email/><br/>
              </p>

              <p class="text-justify"><adresse-retrait/><br/></p>
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
import AdresseRetrait from "~/components/AdresseRetrait"
export default Vue.extend({
  components: {
    Entete,
    Email,
    Telephone,
    AdresseRetrait
  }
})
</script>