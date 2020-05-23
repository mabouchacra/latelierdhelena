<template>
    <b-navbar toggleable="lg" type="light" align="center" sticky class="menu-nav bg-white">
        <!--<b-navbar-brand><nuxt-link to="/">L'atelier d'Héléna</nuxt-link></b-navbar-brand>-->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto" align="center">
            <b-nav-item class="pr-4"><nuxt-link to="/" exact-active-class="header-active">ACCUEIL</nuxt-link></b-nav-item>
            <b-nav-item class="pr-4"><nuxt-link to="/fete" exact-active-class="header-active">FÊTE DES MÈRES&nbsp;&nbsp;<b-icon icon="heart"></b-icon></nuxt-link></b-nav-item>
            <b-nav-item class="pr-4"><nuxt-link to="/maintenant" exact-active-class="header-active">CARTE DU MOMENT</nuxt-link></b-nav-item>
            <b-nav-item class="pr-4"><nuxt-link to="/patisseries" exact-active-class="header-active">PÂTISSERIES</nuxt-link></b-nav-item>
            <!-- <b-nav-item class="pr-4"><nuxt-link to="/recettes" exact-active-class="header-active">RECETTES</nuxt-link></b-nav-item> -->
            <b-nav-item class="pr-4"><nuxt-link to="/pros" exact-active-class="header-active">POUR LES PROS</nuxt-link></b-nav-item>
            <b-nav-item class="pr-4"><nuxt-link to="/contact" exact-active-class="header-active">CONTACT</nuxt-link></b-nav-item>
            <b-nav-text class="pr-2"><telephone/></b-nav-text>
            <b-nav-text class="pr-5"><email/></b-nav-text>
            <b-nav-text class="pl-2">
                <span class="pr-3"><a href="https://www.facebook.com/atelierdhelena" target="_blank"><b-img src="~static/img/facebook.bak.png" width="25px"></b-img></a></span>
                <span><a href="https://www.instagram.com/latelierdhelena/" target="_blank"><b-img src="~static/img/instagram.png" width="25px"></b-img></a></span>
            </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
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

.menu-nav {
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    margin-bottom: 35px;
}
.nav-link a{
    color: black;
    font-size: 16px;
    font-weight: 600;
}

.nav-link a.header-active {
    color: #FFC100;
}
</style>