import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CustomerComponent from "./components/CustomerComponent.vue";
import EmpleadosDetails from "./components/EmpleadosDetails.vue";
import HomeComponent from "./components/HomeComponent.vue";

const Routes = [
  { path: "/", component: HomeComponent },
  { path: "/coches", component: CochesComponent },
  { path: "/customers", component: CustomerComponent },
  { path: "/empleados", component: EmpleadosDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

export default router;
