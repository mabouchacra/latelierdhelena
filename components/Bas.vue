<template>
    <footer class="pt-5 pb-0 mb-0 footer static-bottom">
    <b-container fluid class="bas pt-4">
        <b-row>
            <b-container>
                <b-row>
            <b-col class=" text-left">
                <b-nav vertical>
                    <span class="font-weight-bolder">ME CONTACTER</span>
                    <b-nav-text class="pb-0"><telephone/></b-nav-text>
                    <b-nav-text class=""><email/></a></b-nav-text>
                </b-nav>
            </b-col>
            <b-col class=" text-right">
                <b-nav vertical>
                    <span class="font-weight-bolder">MENTIONS LÉGALES</span>
                    <b-nav-text class="pb-0">N° SIRET : En cours d'attribution</b-nav-text>
                    <b-nav-text class="">Crédit : Logo <a href="https://fr.freepik.com/photos-vecteurs-libre/fond">Starline</a></b-nav-text>
                </b-nav>
            </b-col>
            </b-row>
            </b-container>
        </b-row>
    </b-container>
    </footer>
</template>

<script>
import Vue from 'vue'
import Telephone from "~/components/Telephone";
import Email from "~/components/Email";
export default Vue.extend({
  components: {
    Telephone,
    Email
  }
})
</script>
<style scoped>
.bas {
    /* background-color: #FFC100; */
    background-color: #f8fafc;
    box-shadow: 6px -1px rgba(0,0,0,0.25);
}
footer {

}
</style>