import Global from "@/Global";
import axios from "axios";

export default class ServiceCoches {
  getCoches() {
    return new Promise(function (resolve) {
      let coches = [];
      var request = "webresources/coches";
      let url = Global.urlApiCoches;

      axios.get(url + request).then((response) => {
        console.log("Obteniendo coches...");
        coches = response.data;
        resolve(coches);
      });
    });
  }
}
