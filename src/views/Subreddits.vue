<template>
  <div class="container">
    <aside class="menu">
    <p class="menu-label">
        Choisissez un subreddits
    </p>
 
    <ul class="menu-list">
        <h1 v-if="subreddits.length === 0">Aucun élément pour l'instant ... </h1>
        <li 
         v-for="subreddit in subreddits"
         :key="subreddit.name">

         <router-link :to="{name:'Subreddit',params:{name : subreddit.name}}">{{subreddit.name}}</router-link>
         </li>
    </ul>
</aside>

    
  </div>
</template>

<script>
// @ is an alias to /src

import {mapActions,mapState} from 'vuex';

export default {
  name: 'Subreddits',
  components: {
  },
  computed:mapState('subreddits',['subreddits']),
  methods:{
    ...mapActions('subreddits',['getAll']),
    
  },
  mounted(){
    this.getAll();
    console.log("mounted");
    console.log(this.subreddits);
  }
}
</script>
