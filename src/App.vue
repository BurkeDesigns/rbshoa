
<template>
  <main id="app">
    <transition name="pageTransition">
      <router-view/>
    </transition>
  </main>
</template>

<script>

export default {
  name: 'app',
  components:{
    // Nav,
    // Slideshow,
    // NewsList,
    // Footer
  },
  data(){
    return {
        
    }
  }
}
</script>


<style>
/*-- Global Styles --*/
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

:root {
            --primary-color: #283A5C;
            --secondary-color: #CFB06D;
            --default-border-radius: 3px;
            --default-box-shadow: 0 3px 10px rgba(0, 0, 0, .2);

            --button-color: #fff;

        }
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
}

body * {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5rem;
    outline: none;
    -webkit-tab-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
}

a {
    color: rgba(0, 0, 0, 0.8);
}

main {
    min-height: 100vh;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    background-image: url('./assets/img/topography.svg');
    background-color: #f1f1f1;
    display: flex;
    background-blend-mode: overlay;
    flex-direction: column;
    align-items: center;
}
header {
    min-height: 500px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-shadow: var(--default-box-shadow);
    width: 100%;
    position: relative;
    border-bottom: 10px solid var(--secondary-color);
}
.gradient {
            background-image: linear-gradient(hsla(0, 0%, 0%, .7), transparent);
            height: 200px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
.logo{
    height:150px;
    filter: drop-shadow(0 3px 5px rgba(0,0,0,0.2));
}
.nav-container {
            display: flex;
            align-items: center;
            width: calc(100% - 80px);
            max-width: 1200px;
            z-index: 10;
            position: absolute;
        }

@keyframes page-in {
    from {
        opacity: 0;
        transform:translateY(-50px);
    }

    to {
        opacity: 1;
        transform:translateY(0px);
    }
}

.pageTransition-enter-active {
    animation: page-in 0.6s ease-in-out;
    animation-delay: 0.2s;
    opacity:0;
}

.pageTransition-leave-active {
    animation: page-in reverse 0.6s ease-in-out;
}


.page{
  width:inherit;
  position:fixed;
  overflow: auto;
    height: 100%;
}


/* a.router-link-exact-active {
  color: #42b983;
} */


button, .button {
            background-color: var(--primary-color);
            color: var(--button-color);
            border-radius: var(--default-border-radius);
            padding: 15px 25px;
            border: 0px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            padding: 0 25px;
            min-width: 100px;
            cursor: pointer;
            text-transform: capitalize;
            text-decoration: none;

        }

        button:hover, .button:hover {
            background-color: hsla(219, 39%, 18%, 1);
        }

        .section {
            padding: 2.5rem;
        }

        .section-image-text {
            display: flex;
            padding: 2.5rem;
        }

        .section-image-text img {
            min-width: 300px;
            min-height: 225px;
            max-height: 225px;
            border-radius: 3px;
            background-color: rgba(0, 0, 0, .3);
            object-fit: cover;
            object-position: center;
        }

        .section-image-text div {
            margin-left: 2rem;
        }

        .section-image-text h4 {
            margin: 16px 0;
        }

        footer {
            color: #fff;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        footer ul {
            width: 100%;
            max-width: 1200px;
            padding: 1.25rem;
            max-width: 1200px;
            list-style-type: none;
            margin: 0;
            display: flex;
            color: #fff;
        }

        footer li {
            margin: 1.25rem;
        }

        footer h4 {
            margin: 0;
        }

        footer ul a {
            text-decoration: none;
            color: hsla(0, 0%, 100%, 0.6);
        }

        .author {
            width: 100%;
            padding: 1.25rem;
            background-color: var(--secondary-color);
            display: flex;
            align-items: center;
        }

        .footerlogo {
            fill: rgba(0, 0, 0, 0.6);
            height: 40px;
        }

        @media (max-width: 800px) {

            .section-image-text {
                flex-direction: column;
            }

            .section-image-text img {
                width: 100%;
                max-width: 100%;
                min-width: 100%;
            }

            .section-image-text div {
                margin-left: 0px;
            }
        }




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

        .newsList {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 15px;
            margin: 1.5rem 0;
        }

        .news {
            display: flex;
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            justify-content: space-between;
            flex-direction: column-reverse;
            width: 100%;
            cursor: pointer;
        }

        .newsList>*:nth-child(1) {
            grid-column-end: span 2;
        }

        .news:hover {
            border: 1px solid var(--primary-color);
        }

        .news>*:first-child {
            margin-right: 10px;
        }

        .news img {
            width: 100%;
            height: 150px;
            margin-bottom: 10px;
            object-fit: cover;
            object-position: center;
            border-radius: 3px;
            display: block;
        }

        @media (max-width: 800px) {
            .newsList {
                grid-template-columns: 1fr 1fr;
            }

        }

        @media (max-width: 600px) {
            .newsList {
                grid-template-columns: 1fr;
            }

            .newsList>*:nth-child(1) {
                grid-column-end: span 1;
            }
        }
        .content {
    width: calc(100% - 80px);
    max-width: 1200px;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, .2);
    min-height: calc(100vh - 160px);
    margin:auto;
    margin-top: -100px;
    z-index: 2;
    border-radius: var(--default-border-radius);
    overflow: hidden;
    position: relative;
}

.content > *:nth-child(even) {
    background-color: #f1f1f1;
}
        @media (max-width:800px) {
    .content {
        width: calc(100% - 40px);
    }

    .nav-container {
        justify-content: space-between;
        width: calc(100% - 40px);

    }
}
footer {
    background-color: var(--primary-color);
    width: 100%;
    min-height: 200px;
    margin-top: -100px;
    padding-top: 100px;
}
</style>
    <style>
        /*
        .fade-enter-active,
        .fade-leave-active {
            transition: 1s;
        }

        .fade-move {
            transition: transform 1s;

        }


        .fade-leave-active {
            position: absolute;
        }
*/



        .fade-enter-active {
            animation: fade-in 1s ease-in-out;
        }

        .fade-leave-active {
            animation: fade-in reverse 1s ease-in-out;
        }



        /*
        .fadeIn-enter-active {
            animation: fade-in 0.4s ease-in-out;
        }

        .fadeIn-leave-active {
            animation: fade-in reverse 0.4s ease-in-out;
        }
*/

    </style>
