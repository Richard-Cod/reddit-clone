<template>
  <div class="container">
    <h1>Subreddit : {{$route.params.name}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapActions,mapState} from 'vuex';

export default {
  name: 'Subreddit',
  components: {
  },
  // computed:mapState('subreddits',['subreddits']),
  methods:{
    ...mapActions('subreddits',['getAll']),
    
  },
  mounted(){
  }
}
</script>
