<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    console.log(this.$store)
    window.addEventListener('unload',this.saveState)
  },
  methods:{
    saveState(){
      sessionStorage.setItem('state',JSON.stringify(this.$store.state.user))
    }
  }
}
</script>

<style>
</style>
