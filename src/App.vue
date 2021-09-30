<template>
<v-content>
  <div id="app">
    <v-app-bar
      app 
      elevate-on-scroll
      id="nav"
      class="toolbar"
      extended
    >
    <v-spacer class="col-2"></v-spacer>
    <v-img>
      <v-img width="125" :src="require('@/assets/img/blogLogo.png')" class="logoToolbar" />
    </v-img>
      <v-row class="mainMenu col-8">
          <v-col cols="2">
            <router-link to="/home">HOME</router-link> 
          </v-col>
          <v-col cols="2">
            <router-link to="/lifestyle">LIFESTYLE</router-link>
          </v-col>
          <v-col cols="2">
            <router-link to="/about">ABOUT</router-link> 
          </v-col>
          <v-col cols="2">
            <router-link to="/contact">CONTACT</router-link>
          </v-col>
      </v-row>
    </v-app-bar>
    <router-view/>
  </div>
  </v-content>
</template>

<style lang="scss">
.toolbar {
  background-color: #fafcf7 !important;
  font-family: 'Oswald', sans-serif !important;
  border-bottom: 1px solid #e6e3e3 !important;
  padding-top: 25px;
  
}
.mainMenu{
  font-size: 18px;
}

a {
  text-decoration: none;
}

.logoToolbar{
  width: 70px;

}

#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    

    &.router-link-exact-active {
      color:#89b31d;
    }
  }
}
</style>
