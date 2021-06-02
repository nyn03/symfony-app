<template>
  <div>
    <div class="md-layout md-gutter md-alignment-top-center">
      <h1 class="md-title">Server List</h1>
    </div>

    <md-toolbar class="md-large">
      <div class="md-layout md-gutter md-alignment-top-center">
        <div class="md-layout-item md-size-60">
          <md-checkbox v-model="ram" value="2">2GB</md-checkbox>
          <md-checkbox v-model="ram" value="4">4GB</md-checkbox>
          <md-checkbox v-model="ram" value="8">8GB</md-checkbox>
          <md-checkbox v-model="ram" value="12">12GB</md-checkbox>
          <md-checkbox v-model="ram" value="16">16GB</md-checkbox>
          <md-checkbox v-model="ram" value="24">24GB</md-checkbox>
          <md-checkbox v-model="ram" value="32">32GB</md-checkbox>
          <md-checkbox v-model="ram" value="48">48GB</md-checkbox>
          <md-checkbox v-model="ram" value="64">64GB</md-checkbox>
          <md-checkbox v-model="ram" value="96">96GB</md-checkbox>
        </div>

        <div class="md-layout-item md-size-20">
          <md-field>
            <md-select
              v-model="hdd"
              name="hdd"
              id="hdd"
              placeholder="Hard disk type"
            >
              <md-option value="1">SAS</md-option>
              <md-option value="2">SATA</md-option>
              <md-option value="3">SSD</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item md-size-20">
          <md-field>
            <md-select
              v-model="location"
              name="location"
              id="location"
              placeholder="Location"
            >
              <md-option value="1">AmsterdamAMS-01</md-option>
              <md-option value="2">Washington D.C.WDC-01</md-option>
              <md-option value="3">San FranciscoSFO-12</md-option>
              <md-option value="4">SingaporeSIN-11</md-option>
              <md-option value="5">DallasDAL-10</md-option>
              <md-option value="6">FrankfurtFRA-10</md-option>
              <md-option value="7">Hong KongHKG-10</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item md-size-20">
          <md-button class="md-raised md-primary" v-on:click="getServersList()"
            >Filter</md-button
          >
        </div>
      </div>
    </md-toolbar>
    <md-divider></md-divider>

    <div>
      <md-table v-model="serversList" md-card>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Server Name">{{
            item.server_name
          }}</md-table-cell>
          <md-table-cell md-label="Ram">{{ item.ram_name }}</md-table-cell>
          <md-table-cell md-label="HDD">{{ item.hdd_name }}</md-table-cell>
          <md-table-cell md-label="Location">{{
            item.location_name
          }}</md-table-cell>
          <md-table-cell md-label="Price">{{ item.price }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      serversList: [],
      location: "",
      hdd: "",
      ram: []
    };
  },
  methods: {
    getServersList() {
      let url =
        "http://localhost:8080/api?location=" +
        this.location +
        "&hdd=" +
        this.hdd +
        "&ram=" +
        this.ram.join() +
        "&storage=" +
        "250,500";
      axios.get(url).then(response => (this.serversList = response.data.data));
    }
  },
  mounted() {
    this.getServersList();
  }
};
</script>

<style></style>
