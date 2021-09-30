<template>
  <v-app>
    <div class="mt-15 contact">
      <template>
        <form>
          <v-container :key="align" class="grey lighten-5 mb-6">
            <v-row justify="center" align="center" class="col-12">
              <v-col cols="4">
                <h2 class="mb-5">Leave me a message!</h2>
                <v-text-field dense outlined label="Name" required></v-text-field>
                <v-text-field
                  dense
                  outlined
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-textarea
                  dense
                  outlined
                  label="Message"
                  name="input-7-4"
                  placeholder="Write here your message"
                ></v-textarea>
                <v-btn dark style="background-color:#cbaa5c;" class="mr-4">submit</v-btn>
              </v-col>
            </v-row>
             <v-row class="col-12 cardSubscribe mt-10">
                <v-col cols="5">
                  <h2 align="left" class="ml-2 mb-2">SUBSCRIBE</h2>
                  <p class="mt-10" align="left">Enter your email address to subscribe to this blog and receive notifications of new posts by email.</p>
                  <v-text-field class="mt-5" dense outlined label="Your Email Address"></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-btn class="mr-10 btnSubscribe" dark style="background-color:#cbaa5c;">SUBSCRIBE</v-btn>
                </v-col>
                <v-col cols="5">
                  <h2 align="left" class="ml-2 mb-2">CONTACT</h2>
                  <div class="mt-10" align="left">
                  <v-icon
                    left
                    large
                    color="#cbaa5c"
                  >
                    mdi-email
                  </v-icon>EMAIL <span class="ml-15">THEARTOFTRAVEL@GMAIL.COM</span>
                  <br>
                  <v-icon
                    class="mt-3"
                    left
                    large
                    color="#cbaa5c"
                  >
                    mdi-map-marker
                  </v-icon>ADDRESS <span class="ml-8">1234 WORLD DR. HERE, TX 76123</span>
                  <br>
                  <v-icon
                    class="mt-3"
                    left
                    large
                    color="#cbaa5c"
                  >
                    mdi-phone
                  </v-icon>PHONE <span class="ml-14">555-789-1234</span>
                  </div>
                </v-col>
              </v-row>
          </v-container>
        </form>
      </template>
    </div>
  </v-app>
</template>

<style lang="scss">
@import '@/views/Site/Contact.scss'
</style>
