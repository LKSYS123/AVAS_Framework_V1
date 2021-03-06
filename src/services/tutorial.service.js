// import { Axios } from "axios";
import http from "../http-common";
// import API from '../API'

class TutorialDataService {
  getAll() {
      console.log("=====TutorialDataService====");
    return http.post("/marCargoListAll");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  create(data) {
    console.log("=====TutorialDataService==create=="+data.cd_cargo_rep);
    // return http.post("/marCargoInfoSave", data);
    return http.post("/marCargoInfoSave", data);
  }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new TutorialDataService();