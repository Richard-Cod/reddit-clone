<template>
  <nav style="box-shadow:1px 1px 3px brown" class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img style="min-height:50px"  src="https://dynamic.brandcrowd.com/preview/logodraft/20a9e8e6-d411-4d66-ab54-18d614a19df0/image/large.png"
     >
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
        <div style="flex-direction:column"  class="navbar-item">
            <figure v-if="isLoggedIn" class="image">
             <img   style="background:green;min-height:35px" class="is-rounded" :src="user.image">
            </figure>
            <span>{{user.name}}</span>
        </div>
      <div class="navbar-item">
        <div class="buttons">

          <a @click="test()" v-if="!isLoggedIn" class="button is-primary">
            <strong>S'inscrire</strong>
          </a>

          <a v-if="!isLoggedIn" @click="login()" class="button is-light">
            Connexion
          </a>

          <a v-if="isLoggedIn" @click="logout()" class="button is-danger">
            Se deconnecter
          </a>
        </div>
        

      </div>
    </div>
  </div>
  
</nav>
</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {
  name: 'HelloWorld',
  computed:mapState('auth',['isLoggedIn','user']),
  methods:{
      ...mapActions('auth',['login','logout']),
      test(){
          console.log(this.$store.state.auth.isLoggedIn);
      },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
