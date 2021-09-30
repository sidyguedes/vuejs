<template>
  <v-app>
    <div  class="mt-15 about">
      <template>
        <form>
          <v-container :key="align" class="grey lighten-5 mb-6">
           <v-row justify="center" align="center" class="col-12">
              <v-col cols="5">
               <h2>About me</h2>
               <p class="mt-10">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
               </p>
               <h4 class="mt-10">
                  <p>“Always use active voice over the passive one.”</p>
                </h4>
               <p class="mt-10">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                 sed quia non numquam eius modi tempora incidunt quaerat voluptatem.
                </p>
                <div class="mt-15" justify="left" align="left">
                <p>
                  <v-icon
                    left
                    small
                    color="#cbaa5c"
                  >
                    mdi-check
                  </v-icon>Nemo enim ipsam voluptatem
                  <br>
                  <v-icon
                    left
                    small
                    color="#cbaa5c"
                  >
                    mdi-check
                  </v-icon>Duis aute irure dolor
                  <br>
                  <v-icon
                    left
                    small
                    color="#cbaa5c"
                  >
                    mdi-check
                  </v-icon>Ut enim ad minim veniam
                  <br>
                  <v-icon
                    left
                    small
                    color="#cbaa5c"
                  >
                    mdi-check
                  </v-icon>Excepteur sint occaecat  
                </p>
                </div>
              </v-col>
              <v-col cols="7">
                <v-img height="570" :src="require('@/assets/img/blogProfile.jpg')" class="imgAbout" />
              </v-col>
            </v-row>
          </v-container>
        </form>
      </template>
    </div>
  </v-app>
</template>

<style lang="scss">
@import '@/views/Site/About.scss'
</style>

