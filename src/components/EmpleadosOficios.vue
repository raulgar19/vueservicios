<template>
  <div class="container">
    <h1>Empleados Oficio</h1>
    <table class="table table-warning">
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado">
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
          <td>{{ empleado.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleado";

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosOficio",
  data() {
    return {
      empleados: [],
    };
  },
  methods: {
    getEmpleados() {
      service.getEmpleados().then((result) => {
        this.empleados = result;
      });
    },
  },
  mounted() {
    this.getEmpleados();
  },
  watch: {
    "$route.params.oficio"(oldVal, nextVal) {
      if (oldVal !== nextVal) {
        this.getEmpleados();
      }
    },
  },
};
</script>

<style></style>
