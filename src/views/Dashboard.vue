<template>
  <div>
    <v-row>
      <v-col cols="12" style="margin-left:-15px;margin-top:-15px;">
        <v-container fluid>
          <v-row justify="center">
            <v-subheader>Today</v-subheader>

            <v-expansion-panels popout>
              <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
                <v-expansion-panel-header>
                  <v-row align="center" class="spacer" no-gutters>
                    <v-col cols="4" sm="2" md="1">
                      <v-avatar size="36px">
                        <img
                          v-if="message.avatar"
                          alt="Avatar"
                          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        />
                        <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
                      </v-avatar>
                    </v-col>

                    <v-col class="hidden-xs-only" sm="5" md="3">
                      <strong v-html="message.name"></strong>
                      <span v-if="message.total" class="grey--text"> &nbsp;({{ message.total }}) </span>
                    </v-col>

                    <v-col class="text-no-wrap" cols="5" sm="3">
                      <v-chip
                        v-if="message.new"
                        :color="`${message.color} lighten-4`"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                      >
                        {{ message.new }} new
                      </v-chip>
                      <strong v-html="message.title"></strong>
                    </v-col>

                    <v-col v-if="message.excerpt" class="grey--text text-truncate hidden-sm-and-down">
                      &mdash;
                      {{ message.excerpt }}
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-divider></v-divider>
                  <v-card-text v-text="lorem"></v-card-text>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
     <v-row>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">Unlimited music now</v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    show: false,
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify.js!',
        excerpt: 'Thank you for joining our community...'
      },
      {
        color: 'red',
        icon: 'people',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter'
      },
      {
        color: 'teal',
        icon: 'local_offer',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today'
      }
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel',
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]
  })
}
</script>

<style scoped lang="scss"></style>
