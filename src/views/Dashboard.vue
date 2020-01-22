<template>
  <v-container fluid grid-list-md text-xs-left>
    <v-flex xs12 row align-center justify-center>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm6 md3 pa-2>
          <v-card class="elevation-2">
            <v-card-title>
              <v-flex xs6>
                <v-icon class="green--text" size="72">device_hub</v-icon>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <h3 class="display-2 grey--text">72K</h3>
                <h6 class="caption grey--text text--lighten-1">Nodos</h6>
              </v-flex>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="body-1 grey--text text--lighten-1">ENERO</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 pa-2>
          <v-card class="elevation-2">
            <v-card-title>
              <v-flex xs6>
                <v-icon class="amber--text" size="72">alarms</v-icon>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <h3 class="display-2 grey--text">31K</h3>
                <h6 class="caption grey--text text--lighten-1">Alarmas</h6>
              </v-flex>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="body-1 grey--text text--lighten-1">ENERO</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 pa-2>
          <v-card class="elevation-2">
            <v-card-title>
              <v-flex xs6>
                <v-icon class="deep-orange--text" size="72">speed</v-icon>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <h3 class="display-2 grey--text">95K</h3>
                <h6 class="caption grey--text text--lighten-1">Monitor</h6>
              </v-flex>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="body-1 grey--text text--lighten-1">ENERO</div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <br>
    <br>
    <br>
    <br>
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
      <v-card-title>
        <v-icon
          :color="checking ? 'red lighten-2' : 'indigo'"
          class="mr-12"
          size="64"
          @click="takePulse"
        >mdi-heart-pulse</v-icon>
        <v-row align="start">
          <div class="caption grey--text text-uppercase">ENERO 2020</div>
          <div>
            <span class="display-2 font-weight-black" v-text="avg || '—'"></span>
            <strong v-if="avg">BPM</strong>
          </div>
        </v-row>

        <v-spacer></v-spacer>

        <v-btn icon class="align-self-start" size="28">
          <v-icon>mdi-arrow-right-thick</v-icon>
        </v-btn>
      </v-card-title>

      <v-sheet color="transparent">
        <v-sparkline
          :key="String(avg)"
          :smooth="16"
          :gradient="['#f72047', '#ffd200', '#1feaea']"
          :line-width="3"
          :value="heartbeats"
          auto-draw
          stroke-linecap="round"
        ></v-sparkline>
      </v-sheet>
    </v-card>
  </v-container>
</template>


<script>
const exhale = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data: () => ({
    checking: false,
    heartbeats: []
  }),

  computed: {
    avg() {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
      const length = this.heartbeats.length;

      if (!sum && !length) return 0;

      return Math.ceil(sum / length);
    }
  },

  created() {
    this.takePulse(false);
  },

  methods: {
    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;

      inhale && (await exhale(1000));

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

      this.checking = false;
    }
  }
};
</script>