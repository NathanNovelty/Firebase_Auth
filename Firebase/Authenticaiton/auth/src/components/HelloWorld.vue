<template>
  <div class="hello">
    <p>Sign Up</p>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input v-model='email' id="email" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label"> Password</label>
      <div class="control">
        <input v-model='password' id="password" class="input" type="password" placeholder="Password input">
      </div>
    </div>
    <button @click=LogIn() id="btnLogIn" class="button">Log In</button>
    <button @click=SignUp() id="btnSignUp" class="button">Sign Up</button>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import index from '../firebase/index'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      SignUp () {
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // [START_EXCLUDE]
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
          // [END_EXCLUDE]
        })
        // [END createwithemail]
      },
      LogIn () {
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
          document.getElementById('quickstart-sign-in').disabled = false
          // [END_EXCLUDE]
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 80%;
    margin: auto;
  }

  button {
    float: left;
  }

  label {
    display: -webkit-box;
  }

  input {
    text-align: center;
    width: 300px;
    display: inline-block;
  }

</style>
