<template>
        <div class="newsList">
            <div v-for="item in data" :key="item.author" class="news" @click="openLink(item.fullStoryURL)">
                <div>
                    <b class="newsTitle" :title="item.title">{{item.title}}</b>
                    <p class="newsSummary">{{item.summary}}</p>
                </div>
                <div>
                    <img :src="item.bgURL" />
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'NewsList',
  //props: ['data'],
  data() {
    return {
        speed: 4, //in seconds
        autoplay: true,
        action: null,
        
    }
  },
  computed:{
      data(){
          return this.$store.state.newsData
      }
  },
  methods: {
    openLink: function(url) {
        window.location.href = url;
    }
  },
    mounted: function() {

    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.slideshow {
            background-color: #000;
        }

        .slideshow .slides {
            position: relative;
            overflow: hidden;
            height: 500px;
            width: 100vw;
            opacity: 0;
            animation: fade-in forwards 2s;
        }

        @keyframes fade-in {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        .slideshow .slide,
        .slideshow .slide>* {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            position: absolute;
            top: 0;
            left: 0;
        }

        /*
        .slide>* {
            animation: fade-in forwards 1s;
        }
        */

        .slideshow .slideInfo {
            background-color: hsla(0, 0%, 0%, 0.3);
            padding: 40px;
            color: #fff;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-shadow: 0 3px 5px rgba(0, 0, 0, 1);
        }

        /*
        .slideshow .slideInfo>* {
            max-width: 900px;
            width: 100%;
        }
        */

        .slideshow .slideHeading {
            font-size: 4vmax;
            line-height: 1.3em;
        }

</style>
