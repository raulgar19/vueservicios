<template>
  <div class="container mt-5">
    <div class="card shadow">
      <div class="card-header bg-primary text-white">
        <h2 class="mb-0">Lista de Clientes</h2>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-md-8">
            <input
              v-model="idFilter"
              class="form-control"
              type="search"
              placeholder="Filtrar por ID"
              aria-label="Filtrar por ID"
            />
          </div>
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-primary w-100"
              @click="appliedId = idFilter.trim().toLowerCase()"
            >
              Aplicar Filtro
            </button>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead class="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Compañía</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="customer in customers.filter(
                  (c) =>
                    !appliedId ||
                    String(c.CustomerID || '')
                      .toLowerCase()
                      .includes(appliedId)
                )"
                :key="customer.CustomerID"
              >
                <td>
                  <span class="badge bg-info">{{ customer.CustomerID }}</span>
                </td>
                <td>{{ customer.ContactName }}</td>
                <td class="text-muted">{{ customer.CompanyName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Global from "../Global";
import axios from "axios";
const url = Global.urlApiNortwind;

export default {
  name: "CustomerComponent",
  data() {
    return {
      customers: [],
      idFilter: "",
      appliedId: "",
    };
  },
  methods: {
    loadCustomers() {
      const request = "customers";
      axios.get(url + request).then((response) => {
        this.customers =
          (response && response.data && response.data.value) || [];
      });
    },
  },
  mounted() {
    this.loadCustomers();
  },
};
</script>

<style scoped></style>
