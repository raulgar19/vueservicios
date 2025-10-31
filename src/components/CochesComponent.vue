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
import ServiceCoches from "../services/ServiceCoches";

const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  methods: {
    loadCoches() {
      service.getCoches().then((result) => {
        this.coches = result;
      });
    },
  },
  mounted() {
    this.loadCoches();
  },
};
</script>

<style></style>
