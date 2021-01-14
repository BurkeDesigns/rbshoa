<template>
  <nav v-if="navConfig.showNav">
      <div class="close-mobile-nav"><i class="material-icons" @click="disableNav">close</i></div>
      <div v-for="(link, index) in navConfig.links" :key="link.name" class="nav-link-container" @click="showSubMenu(index)">
          <div :title="link.url" :class="{'nav-link':true, 'active-nav-link':link.isNavLinkActive}">
              <span v-html="link.name"></span>
              <div v-if="link.subLinks != undefined" class="nav-dropdown-icon-container">
                  <i class="material-icons nav-link-icons" v-if="!link.isNavLinkActive">expand_more</i>
                  <i class="material-icons nav-link-icons" v-if="link.isNavLinkActive">expand_less</i>
              </div>
          </div>
          <div class="nav-sub-link-container" v-if="link.showSubLinks">
              <router-link :to="subLink.url" v-for="subLink in link.subLinks" :key="subLink.name" :title="subLink.url" class="nav-sublink">{{subLink.name}}</router-link>
          </div>
      </div>
  </nav>
  <div v-else-if="!navConfig.showNav" @click="enableNav"><i class="material-icons menuIcon">menu</i></div>

</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      mobileNav: false,
      navConfig: {
        showNav: true,
        mobileView: false,
        links: [{
            name: 'Welcome',
            url: '/',
        }, {
            name: 'Community',
            url: '#',
            showSubLinks: false,
            subLinks: [{
                    name: 'News',
                    url: '/community/news'
                }, {
                    name: 'Events',
                    url: '/community/events'
                }, {
                    name: 'Submit a request',
                    url: '/community/request'
                }

            ]
        }, {
            name: 'Amenities',
            url: '#',
            showSubLinks: false,
            subLinks: [{
                    name: 'Pool Schedule',
                    url: '/amenities/pool'
                }, {
                    name: 'Clubhouse Reservations',
                    url: '/amenities/reservations'
                }, {
                    name: 'Amenities List',
                    url: '/amenities'
                }

            ]
        }, {
            name: 'Contact',
            url: '/contact'
        }, {
            name: 'Login',
            url: '/login'
        }]
    },
    }
  },
  methods: {
    showSubMenu: function(index) {
        var x = this;
        this.hideSubMenus();
        this.navConfig.links[index].isNavLinkActive = true;
        this.navConfig.links[index].showSubLinks = true;
        if(!this.navConfig.links[index].subLinks){
            x.to(this.navConfig.links[index].url);
        }

    },
    hideSubMenus: function() {
        for (var i = 0; i < this.navConfig.links.length; i++) {
            this.navConfig.links[i].isNavLinkActive = false;
            this.navConfig.links[i].showSubLinks = false;
        }
    },
    disableNav: function() {
        this.navConfig.showNav = false;
    },
    enableNav: function() {
        this.navConfig.showNav = true;
        this.hideSubMenus();
    },
    to(loc){
            this.$router.push(loc)
        },
  },
  mounted: function() {
      if (window.innerWidth <= 600) {
          this.navConfig.showNav = false;
          this.mobileNav = true;
      }
      this.hideSubMenus();
      //console.log('NAV component mounted.');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.menuIcon{
  font-size: 40px;
  color: #fff;
  text-shadow: 0 3px 5px rgba(0,0,0,0.3);
}
/*-- Default NAV Variables --*/
:root {
    /*-- Default Layout --*/
    --nav-link-border-radius: 3px;

    /*-- Default Text Color --*/
    --nav-link-color: #fff;
    --nav-link-icons-color: hsla(0, 0%, 100%, 0.5);
    --nav-link-highlight-color: hsla(0, 0%, 0%, 0.3);

    /*-- Default Background Color --*/
    --nav-bg-color: transparent;
    --nav-link-container-bg-color: hsla(0, 0%, 0%, 0.1);
    --nav-sub-link-container-bg-color: #283A5C;
}

/*-- Default Layout --*/
nav {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index:10;
}

nav * {
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}

.nav-link-container {
    padding: 0px;
    display: flex;
    position: relative;
    z-index: 10;
}

.nav-link {
    border-top-left-radius: var(--nav-link-border-radius);
    border-top-right-radius: var(--nav-link-border-radius);
}

.nav-link,
.nav-sublink {
    cursor: pointer;
    text-decoration: none;
    padding: 8pt 12pt;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav-dropdown-icon-container{
    display:flex;
}


.nav-link-icons {
    font-size: 16pt;
}

.nav-sub-link-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 230px;
    top: 100%;
    left: 0;
    z-index: 11;
    overflow: hidden;
    border-top-right-radius: var(--nav-link-border-radius);
    border-bottom-left-radius: var(--nav-link-border-radius);
    border-bottom-right-radius: var(--nav-link-border-radius);
}

.close-mobile-nav {
    display: none;
}

/*-- Default Text Color --*/
.nav-link,
.nav-sublink {
    color: var(--nav-link-color);
    cursor: pointer;
}

.nav-link-icons {
    color: var(--nav-link-icons-color);
    cursor: pointer;
}

/*-- Default Background Color --*/
nav {
    background-color: var(--nav-bg-color);
}

.nav-link-container {
    background-color: transparent;
}

.nav-sublink:hover {
    background-color: var(--nav-link-highlight-color);
}

.active-nav-link,
.nav-link:hover {
    background-color: var(--secondary-color);
    color: rgba(0, 0, 0, .8);
}

.active-nav-link {
    position: relative;
}

.nav-link:after {
    content: "";
    height: 5px;
    width: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0px;
    background-color: transparent;
    transition: .2s;
}

.nav-link:hover:after,
.active-nav-link:after {
    background-color: #fff;
    width: 100%;
}

.nav-sub-link-container {
    background-color: var(--nav-sub-link-container-bg-color);
}

/*-- Mobile Styles --*/
@media (max-width:600px) {

    /*-- Mobile Layout --*/
    nav {
        height: 100vh;
        width: 100vw;
        padding: 2.5rem;
        overflow-y: auto;
        overflow-x: hidden;
        flex-direction: column;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--primary-color);
        /*animation: fade-in 0.3s ease-in-out;*/
    }

    .nav-link-container {
        padding: 0px;
        width: 100%;
        flex-direction: column;
        margin: 5px 0;
        border-radius: var(--nav-link-border-radius);
        overflow: hidden;
    }

    .nav-link,
    .nav-sublink {
        padding: 15px 25px;
        width: 100%;
        font-size: 12pt;
        height: 50px;
    }

    .nav-sub-link-container {
        border-top-right-radius: 0px;
        position: relative;
        top: auto;
        left: auto;
    }

    .close-mobile-nav {
        display: flex;
        justify-content: flex-end;
        text-align: right;
    }

    .close-mobile-nav .material-icons {
        border-radius: 100%;
        padding: 5px;
        margin-bottom: 5px;
        font-size: 36px;
    }


    /*-- Mobile Text Color --*/
    .close-mobile-nav {
        color: var(--primary-color);
    }

    /*-- Mobile Background Color --*/
    .nav-link-container {
        background-color: var(--nav-link-container-bg-color);
    }

    .nav-sub-link-container {
        background-color: transparent;
    }

    .close-mobile-nav .material-icons {
        background-color: #fff;
    }

}

</style>
