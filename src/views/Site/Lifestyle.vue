<template>
  <v-app>
    <div class="mt-15 lifestyle">
      <template>
        <v-row class="col-12">
          <v-col v-for="n in 20" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 1 + 50}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 1 + 50}`"
              aspect-ratio="1"
              class="grey lighten-2"
            ></v-img>
          </v-col>
        </v-row>
      </template>
    </div>
  </v-app>
</template>

<style lang="scss">
@import "@/views/Site/Lifestyle.scss";
</style>

