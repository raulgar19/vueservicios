import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
  getEmpleados() {
    return new Promise(function (resolve) {
      let empleados = [];
      var request = "api/empleados";
      let url = Global.urlApiEmpleados;

      axios.get(url + request).then((response) => {
        console.log("Obteniendo empleados...");
        empleados = response.data;
        resolve(empleados);
      });
    });
  }

  getEmpleado(id) {
    return new Promise(function (resolve) {
      let empleado = null;
      var request = "api/empleados/" + id;
      let url = Global.urlApiEmpleados;

      axios.get(url + request).then((response) => {
        console.log("Obteniendo empleado por id...");
        empleado = response.data;
        resolve(empleado);
      });
    });
  }

  getOficios() {
    return new Promise(function (resolve) {
      let oficios = [];
      var request = "api/empleados/oficios";
      let url = Global.urlApiEmpleados;

      axios.get(url + request).then((response) => {
        console.log("Obteniendo oficios...");
        oficios = response.data;
        resolve(oficios);
      });
    });
  }

  getEmpleadosOficio(oficio) {
    return new Promise(function (resolve) {
      let empleados = [];
      var request = "api/empleados/empleadosoficios/" + oficio;
      let url = Global.urlApiEmpleados;

      axios.get(url + request).then((response) => {
        console.log("Obteniendo empleados...");
        empleados = response.data;
        resolve(empleados);
      });
    });
  }
}
