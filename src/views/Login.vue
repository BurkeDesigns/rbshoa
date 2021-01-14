<template>
  <div class="login page">
        
        <section class="content">

            <section>
                <div class="section">
                    <div v-if="showLoginForm" @keyup.enter="login">
                        <img src="@/assets/img/logo.png" alt="logo" class="logo" @click="changeURL('/')">
                        <input v-model.trim="loginForm.email" type="email" placeholder="Email">
                        <input v-model.trim="loginForm.password" type="password" placeholder="Password">
                        <small v-if="errorMsg != ''" class="error">*{{errorMsg}}</small>
                        <button class="button" @click="login">
                            <span v-if="performingRequest">Loading...</span>
                            <span v-else>Sign In</span>
                        </button>
                        <div class="extras">
                            <div><small>Forgot Password</small></div>
                            <hr>
                            <div><small @click="toggleForm">Request Account</small></div>
                        </div>
                    </div>
                    <div v-else>
                        <img src="@/assets/img/logo.png" alt="logo" class="logo" @click="changeURL('/')">
                        <input v-model.trim="signupForm.firstName" type="text" placeholder="First Name">
                        <input v-model.trim="signupForm.lastName" type="text" placeholder="Last Name">
                        <input v-model.trim="signupForm.email" type="email" placeholder="Email">
                        <input v-model.trim="signupForm.phone" type="text" placeholder="Phone #">
                        <input v-model.trim="signupForm.address" type="text" placeholder="Street Address">
                        <input v-model.trim="signupForm.password" type="password" placeholder="Password">
                        <input v-model.trim="signupForm.confirmPassword" type="password" placeholder="Confirm Password">
                        <small v-if="errorMsg != ''" class="error">*{{errorMsg}}</small>
                        <button class="button" @click="signup">
                            <span v-if="performingRequest">Loading...</span>
                            <span v-else>Request My Account</span>
                        </button>
                        <div class="extras">
                            <a @click="toggleForm">Log In</a>
                        </div>
                    </div>
                </div>

            </section>
        </section>
            
  </div>

</template>

<script>
const fb = require('../firebaseConfig.js')

export default {
  name: 'login',
  data(){
    return {
        loginForm: {
            email: '',
            password: ''
        },
        signupForm: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmPassword: '',
        },
        showLoginForm: true,
        performingRequest: false,
        errorMsg: '',
    }
  },
  methods:{
      toggleForm(){
          this.showLoginForm = !this.showLoginForm;
          this.errorMsg = '';
      },
      login() {
            this.performingRequest = true;
            fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
                this.$store.commit('setCurrentUser', user.user)
                //this.$store.commit('setCurrentUser', user.user) 
                this.$store.dispatch('fetchUserProfile')
                this.performingRequest = false;
                this.errorMsg = '';
                this.$router.push('/dashboard');
            }).catch(err => {
                console.log(err);
                this.performingRequest = false;
                this.errorMsg = err.message;
            })
        },
        signup() {
            var x = this;
            if(x.signupForm.password == x.signupForm.confirmPassword){
                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
                    //let user = user.user;
                    x.$store.commit('setCurrentUser', user.user)
                    
                    if(x.signupForm.email != null){
                        fb.usersCollection.doc(user.user.uid).set({
                            firstName: x.signupForm.firstName,
                            lastName: x.signupForm.lastName,
                            email: x.signupForm.email,
                            address: x.signupForm.address,
                            phone: x.signupForm.phone,
                            approvedAccount: false,
                            permissions: {
                                admin: false,
                                account: false,
                                reservations: false,
                                files: false,
                                events: false,
                                news: false,
                                requests: false,
                            },
                            role:'',
                            createdOn: Date.now(),
                        }).then(() => {
                            x.$store.dispatch('fetchUserProfile')
                            x.$router.push('/dashboard')
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                    
                x.errorMsg = '';
                }).catch(err => {
                    console.log(err);
                    x.errorMsg = err.message;
                })
            }else{
                x.errorMsg = "The password confirmation doesn't match your password";
            }
            
        },
        changeURL(loc){
            this.$router.push(loc)
        }
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
<style scoped>
.logo{
    cursor:pointer;
}
.login .content{
    all: unset;

    display: unset;
    justify-content: unset;
    align-items: unset;
    min-height: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin-top:0;

}
.login .content .section{
    background-color:#fff;
    border-radius:5px;
    box-shadow: 0 3px 15px rgba(0,0,0,0.2);
}
.login .content .section > *{
    display:grid;
    grid-gap:10px;
    justify-content: center;
    justify-items: center;
    width:100%;
    max-width:300px;
}
.login .button{
    width:100%;
    transition:.2s;
}
.login input{
    width:100%;
    height:35px;
    display:flex;
    align-items: center;
    padding:0 15px;
    border-radius:3px;
    background-color: rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0);
    transition:.2s;
}
.login input:focus{
    border:1px solid rgba(0,0,0,0.25);
}
.login .extras{
    display:grid;
    justify-items: center;
    grid-gap:0px;
    color:rgba(0,0,0,0.7);
    width:100%;
}
.extras small{
font-size:14px !important;
cursor: pointer;
}
hr{
    border:0;
    height:1px;
    background-color: rgba(0,0,0,0.25);
    width:100%;
}
.error{
    color:darkred;
}
</style>