<template>
  <div class="home page">
    <div class="gradient"></div>
        <header>

            <div class="nav-container">
                <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="logo"></router-link>
                <Nav/>
            </div>
            <div>
                <Slideshow />
            </div>
        </header>
        <Footer />
  </div>

</template>

<script>

export default {
  name: 'PageNotFound',
  components: {
  },
  computed:{
      slideshow(){
          return this.$store.state.slideshowData
      }
  },
}
</script>
