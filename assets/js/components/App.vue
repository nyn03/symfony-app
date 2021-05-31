<template>

  <!-- <div class="md-layout md-gutter md-alignment-center" > -->
  <div class="md-layout md-gutter" >
    <div class="md-layout-item">

            <md-checkbox v-model="array" value="2">2GB</md-checkbox>
            <md-checkbox v-model="array" value="4">4GB</md-checkbox>
            <md-checkbox v-model="array" value="8">8GB</md-checkbox>
            <md-checkbox v-model="array" value="12">12GB</md-checkbox>
            <md-checkbox v-model="array" value="16">16GB</md-checkbox>
            <md-checkbox v-model="array" value="24">24GB</md-checkbox>
            <md-checkbox v-model="array" value="32">32GB</md-checkbox>
            <md-checkbox v-model="array" value="48">48GB</md-checkbox>
            <md-checkbox v-model="array" value="64">64GB</md-checkbox>
            <md-checkbox v-model="array" value="96">96GB</md-checkbox>

        
        <md-field>
          <md-select v-model="hdd" name="hdd" id="hdd" placeholder="Hard disk type">
            <md-option value="australia">SAS</md-option>
            <md-option value="brazil">SATA</md-option>
            <md-option value="japan">SSD</md-option>
          </md-select>
        </md-field>
      
        <md-field>
          <md-select v-model="location" name="location" id="location" placeholder="Location">
            <md-option value="1">AmsterdamAMS-01</md-option>
            <md-option value="2">Washington D.C.WDC-01</md-option>
            <md-option value="3">San FranciscoSFO-12</md-option>
            <md-option value="4">SingaporeSIN-11</md-option>
            <md-option value="5">DallasDAL-10</md-option>
            <md-option value="6">FrankfurtFRA-10</md-option>
            <md-option value="7">Hong KongHKG-10</md-option>
          </md-select>
        </md-field>
      
      
    <md-divider></md-divider>

    <md-table v-model="serversList" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Server Name" >{{ item.server_name }}</md-table-cell>
        <md-table-cell md-label="Ram" >{{ item.ram_name }}</md-table-cell>
        <md-table-cell md-label="HDD" >{{ item.hdd_name }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.location_name }}</md-table-cell>
        <md-table-cell md-label="Price">{{ item.price }}</md-table-cell>
      </md-table-row>
    </md-table>
    </div>
</div>

</template>

<script>
import axios from 'axios'


export default {
    data () {
      return {
        serversList: []
      }
    },
    mounted () {
      axios
        .get('http://localhost:8080/api?location=1&hdd=2&ram=2,4,8,12&storage=250,500')
        .then(response => (this.serversList = response.data.data))
    }
}
</script>

<style>

</style>