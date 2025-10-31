<template>
  <div class="container">
    <h1>Home</h1>
    <h2 style="color: blue">{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "../services/ServiceEjemplo";

const service = new ServiceEjemplo();

export default {
  name: "HomeComponent",
  data() {
    return {
      mensaje: "",
    };
  },
  methods: {
    getSaludo() {
      this.mensaje = service.getSaludo("Raúl");
    },
  },
  mounted() {
    this.getSaludo();
  },
};
</script>

<style></style>
