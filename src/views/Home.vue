<template>
  <div class="container">
    <h1>Page d'accueil </h1>
    

      <button @click="truc">dededede</button>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  methods:{
    ...mapActions('auth',['login']),
    truc(){
      alert("lecnon");
      console.log(this);
    }
  },
}
</script>
