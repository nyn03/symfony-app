<template>
  <div>
    <div class="md-layout md-gutter md-alignment-top-center">
      <h1 class="md-title">Server List</h1>
    </div>

    
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
              <md-option value="">Select hard disk type</md-option>
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
              <md-option value="">Select location</md-option>
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

<h3>Select Range</h3>
      <div class="md-layout-item md-size-20">
          <md-field>
            <md-select
              v-model="minRange"
              name="min_range"
              id="min_range"
              placeholder="Min Storage"
            >
            <md-option value="">Select min storage</md-option>
              <md-option value="0">0</md-option>
              <md-option value="250">250GB</md-option>
              <md-option value="500">500GB</md-option>
              <md-option value="1000">1TB</md-option>
              <md-option value="2000">2TB</md-option>
              <md-option value="3000">3TB</md-option>
              <md-option value="4000">4TB</md-option>
              <md-option value="8000">8TB</md-option>
              <md-option value="12000">12TB</md-option>
              <md-option value="24000">24TB</md-option>
              <md-option value="48000">48TB</md-option>
              <md-option value="72000">72TB</md-option>
            </md-select>
          </md-field>
      </div>
      <div class="md-layout-item md-size-20">
          <md-field>
            <md-select
              v-model="maxRange"
              name="max_range"
              id="max_range"
              placeholder="Max Storage"
            >
            <md-option value="">Select max storage</md-option>
              <md-option value="250">250GB</md-option>
              <md-option value="500">500GB</md-option>
              <md-option value="1000">1TB</md-option>
              <md-option value="2000">2TB</md-option>
              <md-option value="3000">3TB</md-option>
              <md-option value="4000">4TB</md-option>
              <md-option value="8000">8TB</md-option>
              <md-option value="12000">12TB</md-option>
              <md-option value="24000">24TB</md-option>
              <md-option value="48000">48TB</md-option>
              <md-option value="72000">72TB</md-option>
            </md-select>
          </md-field>
        </div>
        

        <div class="md-layout-item md-size-20">
          <md-button class="md-raised md-primary" v-on:click="getServersList()"
            >Filter</md-button
          >
        </div>
      </div>
    
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

  <div class="md-alignment-top-center">
    <paginate
    :page-count="lastPageNumber"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
</div>
    </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import Paginate from "vuejs-paginate2"
Vue.component('paginate', Paginate)

export default {
  data() {
    return {
      serversList: [],
      location: "",
      hdd: "",
      ram: [],
      minRange:"",
      maxRange:"",
      lastPageNumber:1
    };
  },
  methods: {
    getServersList(page = 1) {
      let url =
        apiUrl + "/api/v1/servers-list?location=" +
        this.location +
        "&hdd=" +
        this.hdd +
        "&ram=" +
        this.ram.join()+"&storage=";

        if(this.minRange!="" && this.maxRange!="") {
          url = url + String(this.minRange) + "," + String(this.maxRange);
        }
        url += "&page=" + page;
        
        axios.get(url)
        .then(response => (
          this.serversList = response.data.payload.result,
          this.lastPageNumber = response.data.payload.lastPageNumber
        ));
    },
    clickCallback (pageNum) {
      this.getServersList(pageNum);
    }
  },
  mounted() {
    this.getServersList();
  }
};
</script>
