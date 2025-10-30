<template>
  <div>
    <h1>Api Coches</h1>
    <div v-for="coche in coches" :key="coche">
      <h3 style="color: blue">{{ coche.marca }} {{ coche.modelo }}</h3>
      <p>Driver: {{ coche.conductor }}</p>
      <img :src="coche.imagen" style="width: 150px; height: 150px" alt="" />
    </div>
  </div>
</template>

<script>
import Global from "../Global";
import axios from "axios";

let url = Global.urlApiCoches;

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  methods: {
    loadCoches() {
      var request = "webresources/coches";

      axios.get(url + request).then((response) => {
        this.coches = response.data;
      });
    },
  },
  mounted() {
    this.loadCoches();
  },
};
</script>

<style></style>
