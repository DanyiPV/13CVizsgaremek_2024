<script setup lang="ts">

</script>


/* FŐoldal */
<template>
  <v-card>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>
      <v-row>
        <v-main style="height: auto; padding-bottom: 1.2vh;">
        <v-layout class="rounded rounded-md">
          <v-main class="d-flex align-start justify-center" style="height: auto;">
            <v-col cols="12">
                <v-sheet class="mx-auto fill-width" max-width="1500" elevation="0">
                  <v-slide-group
                    v-model="model"
                    class="pa-4"
                    show-arrows
                  >
                    <v-slide-group-item
                      v-for="n in 4"
                      :key="n"
                    >
                    <v-card-text>
                  <v-card
                    class="mx-auto"
                    color="surface-variant"
                    image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
                    width="330"
                    subtitle="Take a walk down the beach"
                    title="Evening sunset"
                  >
                    <template v-slot:actions>
                      <v-btn
                        append-icon="mdi-chevron-right"
                        color="red-lighten-2"
                        text="Book Activity"
                        variant="outlined"
                        block
                      ></v-btn>
                    </template>
                  </v-card>
                </v-card-text>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-sheet>
              <v-row>
                  <v-sheet
                    class="mx-auto"
                    max-width="1200"
                  >
                    <v-slide-group
                      show-arrows
                    >
                      <v-slide-group-item
                        v-for="n in 25"
                        :key="n"
                        v-slot="{ isSelected, toggle }"
                      >
                        <v-btn
                          :color="isSelected ? 'primary' : undefined"
                          class="ma-2"
                          rounded
                          @click="toggle"
                        >
                          Options {{ n }}
                        </v-btn>
                      </v-slide-group-item>
                    </v-slide-group>
                  </v-sheet>
              </v-row>
              <v-row>
                Main Content
              </v-row>
            </v-col>
          </v-main>
          <v-navigation-drawer :width="450" location="right">
            <v-col cols="15">            
              <v-list>
                <v-list-item title="Drawer right"></v-list-item>
              </v-list>
            </v-col>
          </v-navigation-drawer>
        </v-layout>
      </v-main>
      </v-row>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>