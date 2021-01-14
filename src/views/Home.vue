<template>
  <div class="home page">
    <div class="gradient"></div>
        <header>

            <div class="nav-container">
                <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="logo"></router-link>
                <Nav />
            </div>
            <div>
                <Slideshow />
            </div>
        </header>
        <section class="content">

            <section>
                <div class="section-image-text section">
                    <img src="@/assets/img/club_house_mini.jpg">
                    <div>
                        <h4>Welcome to Ridings at Blue Spring Home Owners Association</h4>
                        <p>
                            Ridings at Blue Spring (RBS) is a single family housing development located in Loudoun County, right up against the border between Loudoun and Fairfax county along Rt-50. The RBS Home Owners' Association consists of 311 homes built by <a href="http://www.pulte.com/">Pulte Homes</a> and <a href="http://www.brookfieldhomes.com">Brookfield Homes</a>.
                        </p>
                        <p>
                            If you are a resident of our community, <a href="/login" target="_top">click here</a> to log into the private side of the web site. If you have not been notified of your login name and password, please complete the <a href="/login/request" target="_top">Login Request Form</a>
                        </p>
                        <router-link to="/" class="button">learn more</router-link>
                    </div>
                </div>

            </section>
            <section>

                <div class="section-events section">
                    <div>
                        <h4>Upcoming Events</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet dolor in venenatis blandit. Curabitur et ex nec dui dapibus efficitur vel eu ipsum. Maecenas dignissim velit mollis, accumsan neque eu, vulputate felis. Integer lobortis dapibus justo, et suscipit arcu. Praesent at suscipit justo. Phasellus aliquet efficitur elit, eget vulputate nisl. Nullam non dolor gravida, suscipit dui at, lacinia neque.</p>
                        <button>Get Involved</button>
                        <NewsList />
                    </div>
                </div>
            </section>
            <section>

                <div class="section-news section">
                    <div>
                        <h4>News</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet dolor in venenatis blandit. Curabitur et ex nec dui dapibus efficitur vel eu ipsum. Maecenas dignissim velit mollis, accumsan neque eu, vulputate felis. Integer lobortis dapibus justo, et suscipit arcu. Praesent at suscipit justo. Phasellus aliquet efficitur elit, eget vulputate nisl. Nullam non dolor gravida, suscipit dui at, lacinia neque.</p>
                        <NewsList />
                        <button>View More</button>
                    </div>
                </div>
            </section>

        </section>
        <Footer></Footer>
  </div>

</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      
      
    }
  },
  head: {
    title: {
      inner: 'Home'
    },
    meta: [
      { name: 'theme-color', content: '#283a5c' },
      { name: 'description', content: 'Welcome to Ridings at Blue Spring Home Owners Association.', id: 'desc' }, // id to replace intead of create element
      // ...
      {name:'og:site_name', content: 'Ridings at Blue Spring Home Owners Association'},
      {name:'og:title', content: 'Ridings at Blue Spring Home Owners Association'},
      {name:'og:description', content: "Ridings at Blue Spring (RBS) is a single family housing development located in Loudoun County, right up against the border between Loudoun and Fairfax county along Rt-50. The RBS Home Owners' Association consists of 311 homes built by Pulte Homes and Brookfield Homes."},
      {name:'og:image', content: 'https://rbshoa.web.app/assets/img/club_house.jpg'},
      {name:'og:url', content: 'https://rbshoa.web.app'},
      {name:'twitter:card', content: 'summary_large_image'},
      // ...
    ],
    link: [
      { rel: 'canonical', href: 'https://rbshoa.wep.app', id: 'canonical' },
      //{ rel: 'icon', href: require('./path/to/icon-16.png'), sizes: '16x16', type: 'image/png' }, 
    ],
  },
  computed:{
      slideshow(){
          return this.$store.state.slideshowData
      }
  },
}

// db.collection("playlists").add({
//       accountID: 'test',
//       playlistName: 'folderName',
//       timestamp: 'Date',
//       transitionType: ''
//   }).then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   }).catch(function(error) {
//       alert("Error creating playlist: ", error);
//   });
</script>