<template>
    <b-navbar toggleable="lg" type="light" align="center" sticky class="menu-nav bg-white">
        <!--<b-navbar-brand><nuxt-link to="/">L'atelier d'Héléna</nuxt-link></b-navbar-brand>-->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto" align="center">
            <b-nav-item class="pr-4"><nuxt-link to="/" exact-active-class="header-active">ACCUEIL</nuxt-link></b-nav-item>
            <b-nav-item class="pr-4"><nuxt-link to="/patisseries" exact-active-class="header-active">PÂTISSERIES</nuxt-link></b-nav-item>
            <!-- <b-nav-item class="pr-4"><nuxt-link to="/recettes" exact-active-class="header-active">RECETTES</nuxt-link></b-nav-item> -->
            <b-nav-item class="pr-4"><nuxt-link to="/pros" exact-active-class="header-active">POUR LES PROS</nuxt-link></b-nav-item>
            <b-nav-item class="pr-4"><nuxt-link to="/contact" exact-active-class="header-active">CONTACT</nuxt-link></b-nav-item>
            <b-nav-text><telephone/></b-nav-text>
            <b-nav-text>&nbsp;&nbsp;-&nbsp;&nbsp;</b-nav-text>
            <b-nav-text><email/></b-nav-text>
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
    font-weight: 900;
}

.nav-link a.header-active {
    color: #FFC100;
}
</style>