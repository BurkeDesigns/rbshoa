<template>
        <div class="slideshow">
            <transition-group name="fade" tag="div" class="slides">
                <div v-for="(item, index) in data" :key="item.src" v-if="index <= currentSlide && index >= (currentSlide - 1)" class="slide">
                    <img :src="item.src" v-if="item.type == 'img'" />
                    <video :src="item.src" v-if="item.type == 'video'" autoplay loop muted></video>
                    <iframe :src="item.src" v-if="item.type == 'web'" frameborder="0"></iframe>
                    <div class="slideInfo" v-if="'text' in item">
                        <div class="slideHeading">{{item.text}}</div>
                        <div v-if="'url' in item"><button @click="openLink(item.url)">More Info</button></div>
                    </div>
                </div>
            </transition-group>
        </div>
</template>

<script>

export default {
  name: 'Slideshow',
  //props: ['data'],
  data() {
    return {
        speed: 4, //in seconds
        autoplay: true,
        action: null,
        currentSlide: 0,
    }
  },
  computed:{
      data(){
          return this.$store.state.slideshowData
      }
  },
  methods: {
    next: function() {
        var x = this,
            speed = x.speed * 1000;
        this.clearAction();
        x.currentSlide++;
        if(x.currentSlide >= x.data.length){
            x.currentSlide = 0;
        }
        if (this.autoplay == true) {
            if ('speed' in this.data[this.data.length - 1]) {
                speed = this.data[this.data.length - 1].speed * 1000;
            }


            this.action = setTimeout(function() {
                x.next();
            }, speed);
        }

    },
    prev: function() {
        var x = this,
            speed = x.speed * 1000;
        this.clearAction();
        var currentSlide = this.data.shift();
        this.data.push(currentSlide);
        if (this.autoplay == true) {
            if ('speed' in this.data[1]) {
                speed = this.data[1].speed * 1000;
            }

            this.action = setTimeout(function() {
                x.prev();
            }, x.speed * 1000);
        }
    },
    clearAction: function() {
        if (this.action != null) {
            clearTimeout(this.action);
        }
    },
    openLink: function(url) {
        window.location.href = url;
    }
  },
    mounted: function() {
        var x = this;
        if (this.autoplay == true && this.data.length >= 2) {
            setTimeout(function() {
                x.next();
            }, x.speed * 1000);
        }
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
