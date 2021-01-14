<template>
  <div class="home page">
    <div class="gradient"></div>
        <header>

            <div class="nav-container">
                <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="logo"></router-link>
                <Nav/>
            </div>
            <div>
                
            </div>
        </header>
        <section class="content">

            <section>
                <div class="section">
                    <div>
                        <h4>Contact Information</h4>
                        <p>
                            If you have any questions, comments, or suggestion please contact the First Service Customer Service Center at (703) 385-1133 to speak with one of the customer service representatives. If you need further assistance with an association matter, you will be directed to a management or accounting representative. The office hours will be 9:00 a.m. until 5:30 p.m. EST, Monday through Friday.
                        </p>
                        <router-link to="/community/request" class="button">Make a Request</router-link>
                    </div>
                </div>

            </section>
            <section>

                <div class="section">
                    <div>
                        <h4>Upcoming Events</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet dolor in venenatis blandit. Curabitur et ex nec dui dapibus efficitur vel eu ipsum. Maecenas dignissim velit mollis, accumsan neque eu, vulputate felis. Integer lobortis dapibus justo, et suscipit arcu. Praesent at suscipit justo. Phasellus aliquet efficitur elit, eget vulputate nisl. Nullam non dolor gravida, suscipit dui at, lacinia neque.</p>
                        <button>Get Involved</button>
                    </div>
                </div>
            </section>
            <section>

                <div class="section-news section">
                    <div>
                        <h4>News</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet dolor in venenatis blandit. Curabitur et ex nec dui dapibus efficitur vel eu ipsum. Maecenas dignissim velit mollis, accumsan neque eu, vulputate felis. Integer lobortis dapibus justo, et suscipit arcu. Praesent at suscipit justo. Phasellus aliquet efficitur elit, eget vulputate nisl. Nullam non dolor gravida, suscipit dui at, lacinia neque.</p>
                        <button>View More</button>
                    </div>
                </div>
            </section>

        </section>
        <Footer />
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'contact',
  components: {
  },
  data(){
    return {
      slideshowData: [{
          src: require("@/assets/img/club_house.jpg"),
          type: 'img',
          text: 'Contact Us',
      }],
      
    }
  }
}
</script>
<style>
header{
    min-height: 280px;
    background-color: rgba(0, 0, 0, 0.6);
}
</style>
