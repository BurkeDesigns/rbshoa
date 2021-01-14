<template>
  <div class="dashboard page layout">
    <div nav>
        <div><router-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="logo"></router-link></div>
        <div @click="changePath('reservations')" :class="{currentPath: currentPath == 'reservations'}"><i class="material-icons">payment</i>Reservations</div>
        <div @click="changePath('requests')" :class="{currentPath: currentPath == 'requests'}"><i class="material-icons">help_outline</i>Requests</div>
        <div @click="changePath('events')" :class="{currentPath: currentPath == 'events'}"><i class="material-icons">event</i>Events</div>
        <div @click="changePath('news')" :class="{currentPath: currentPath == 'news'}"><i class="material-icons">rss_feed</i>News</div>
        <div @click="changePath('files')" :class="{currentPath: currentPath == 'files'}"><i class="material-icons">folder</i>Files</div>
        <div @click="changePath('account')" :class="{currentPath: currentPath == 'account'}"><i class="material-icons">account_circle</i><span>My Account</span></div>
        <div @click="changePath('users')" :class="{currentPath: currentPath == 'users'}"><i class="material-icons">supervised_user_circle</i><span>Users</span></div>
        <div @click="signout"><i class="material-icons">power_settings_new</i>Sign Out</div>
    </div>
	<section content v-if="user.approvedAccount">
        <div v-if="currentPath == 'reservations' && (user.permissions.admin || user.permissions.reservations)">Reservations</div>
        <div v-if="currentPath == 'requests' && (user.permissions.admin || user.permissions.requests)">Requests</div>
        <div v-if="currentPath == 'events' && (user.permissions.admin || user.permissions.events)">Events</div>
        <div v-if="currentPath == 'news' && (user.permissions.admin || user.permissions.news)">news</div>
        <div v-if="currentPath == 'files' && (user.permissions.admin || user.permissions.files)">files</div>
        <div v-if="currentPath == 'account' && (user.permissions.admin || user.permissions.account)">account</div>
        <div v-if="currentPath == 'users' && (user.permissions.admin || user.permissions.users)">
            <div el="list">
                <div class="panel">
                    <div el="title">
                        <span>Users</span>
                        <i class="material-icons" @click="getUserList('next')">refresh</i>
                    </div>
                    
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(item, index) in userList.users" :key="item.createdOn">
                            <td>{{item.firstName + ' '+item.lastName}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.phone}}</td>
                            <td><button>Approve</button><button>Delete</button><button>Make Admin</button></td>
                        </tr>
                    </table>
                    <div>
                        <button @click="getUserList('prev')">Prev</button>
                        <button @click="getUserList('next')" :disabled="userList.lastVisible == null? true : false">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section content v-else>
        <div el="list">
            <div class="panel">
                <div>Your account is pending approval by an administrator.</div>
            </div>
        </div>
    </section>
            
  </div>

</template>

<script>
const fb = require('../firebaseConfig.js')
const db = fb.db;

export default {
  name: 'dashboard',
  data(){
    return {
        currentPath: 'files',
        userList: {
            show:true,
            lastVisible: '',
            pageLen: 2,
            users:{},
        },
    }
  },
  methods:{
        signout(){
            var x = this;
            fb.auth.signOut().then(function() {
            // Sign-out successful.
            }).catch(function(error) {
            // An error happened.
                console.log(error);
            });
            x.changeURL('/');

        },
        getUserList(type){
            var x = this;

            var docRef = null;
            switch (type){
                case 'next':
                    if(x.userList.lastVisible == ''){
                        docRef = db.collection("users").orderBy("firstName").limit(x.userList.pageLen);
                    }else{
                        docRef = db.collection("users").orderBy("firstName").startAfter(x.userList.lastVisible).limit(x.userList.pageLen);
                    }
                    
                    break;
                case 'prev':
                    docRef = db.collection("users").orderBy("firstName").endAt(x.userList.lastVisible).limit(x.userList.pageLen);
                    break;
            }
            
            
            docRef.get().then(function(querySnapshot) {
                x.userList.users = {};
                if(querySnapshot.docs.length == 0){
                    x.userList.lastVisible = null;
                }else{
                    x.userList.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
                }
                
                console.log("last", x.userList.lastVisible);

                querySnapshot.forEach(function(doc) {
                    var item = doc.data();
                    x.$set( x.userList.users, item.createdOn, item);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        },
        changeURL(loc){
            this.$router.push(loc)
        },
        changePath(path){
            this.currentPath = path;
        }
  },
  computed:{
      slideshow(){
          return this.$store.state.slideshowData
      },
      user(){
          return this.$store.state.userProfile
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
<style scoped>
.layout{
	/*----- LAYOUT STRUCTURE -----*/
	--layout-columns: minmax(200px, 250px) 1fr;
	--layout-rows: 1fr;
	--layout-structure: 
		"nav main";
		
	/*----- LAYOUT APPEARANCE -----*/
	--layout-bg-color: rgba(0,0,0,0.1);
	--logo-bg-color: transparent;
	--nav-bg-color: var(--primary-color);
	--sidebar-bg-color: purple;
	--main-bg-color: #f1f1f1;
	--footer-bg-color: #333;
	
	/*----- LAYOUT SIZING -----*/
	--layout-min-height: 100vh;
	--layout-width: 100vw;
	
	/*----- INNER-HEADER SIZING -----*/
	--logo-height: 80px;
	--logo-width: auto;
	
	/*----- MAIN SIZING -----*/
	
}
body{
	padding:0;
	margin:0;
	font-family: tahoma, sans-serif;
	
}
.layout{
	display: grid;
	grid-template-columns: var(--layout-columns);
	grid-template-rows: var(--layout-rows);
	background-color:var(--layout-bg-color);
	min-height:var(--layout-min-height);
	min-width:var(--layout-width);
	
}
[nav]{
	background-color: var(--nav-bg-color);
    display: grid;
    grid-gap: 0px;
    grid-auto-flow: row;
    padding: 0px;
    align-content: baseline;
    color:hsla(0,0%,100%, 0.8);
}
[nav] > *:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 30px;

}
[nav] > *:not(:first-child){
    padding: 8px 30px;
    border-radius:0px;
    transition: .2s;
    cursor: pointer;
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;
    justify-content: flex-start;
}
[nav] >*:not(:first-child):hover, 
.currentPath{
    background-color: rgba(0,0,0,0.2);
}
.currentPath{
    color:var(--secondary-color);
}
[content]{
	background-color: var(--main-bg-color);
    background-image: url(/img/topography.5710ccdf.svg);
    background-blend-mode: overlay;
}
[el="list"]{
    margin:30px;
    display:grid;
    grid-gap:30px;
    grid-auto-flow: row;
}
[el="title"]{
    font-size:20px !important;
    display:grid;
    grid-gap:10px;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
}
.panel{
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
    padding: 20px;
    display: grid;
    grid-gap:10px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
table tr:first-child{
    border-bottom: 3px solid var(--primary-color);
}
td, th {
  text-align: left;
  padding: 3px;
}
table tr:not(:first-child):not(:last-child){
    border-bottom: 1px solid #dddddd;
}
/* table tr:not(:first-child):hover{
    outline: 1px solid var(--primary-color);
    outline-offset: -1px;
} */

</style>