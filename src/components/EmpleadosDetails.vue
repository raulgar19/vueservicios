<template>
  <div class="container mt-5">
    <div class="card shadow">
      <div class="card-header bg-primary text-white">
        <h2 class="mb-0">Detalle de Empleados</h2>
      </div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label class="form-label fw-bold">Seleccione un empleado</label>
            <select class="form-select" v-model="idEmpleado">
              <option
                v-for="empleado in empleados"
                :key="empleado.idEmpleado"
                :value="empleado.idEmpleado"
              >
                {{ empleado.apellido }}
              </option>
            </select>
          </div>
          <button class="btn btn-primary" v-on:click.prevent="getEmpleado()">
            Ver Detalles
          </button>
        </form>

        <div v-if="empleado" class="mt-4">
          <h5 class="text-muted mb-3">Información del Empleado</h5>
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>Apellido:</strong>
              <span>{{ empleado.apellido }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>Oficio:</strong>
              <span class="badge bg-info">{{ empleado.oficio }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>Salario:</strong>
              <span class="text-success fw-bold">{{ empleado.salario }} €</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>Departamento:</strong>
              <span class="badge bg-secondary">{{
                empleado.departamento
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleado";

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosDetails",
  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      empleado: null,
    };
  },
  methods: {
    loadEmpleados() {
      service.getEmpleados().then((result) => {
        this.empleados = result;
      });
    },

    getEmpleado() {
      service.getEmpleado(this.idEmpleado).then((result) => {
        this.empleado = result;
      });
    },
  },
  mounted() {
    this.loadEmpleados();
  },
};
</script>

<style></style>
