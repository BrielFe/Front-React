import axios from "axios";

const BaseAPI = axios.create({
  baseURL:
    "https://bitbucket.org/thiagonobre/apirest/raw/eb4eee3039e972ccc636518f69bd5a1fd0a88d89/conta.json",
});

const Api = {
  /**
   * Status Service of API
   */
  status: () => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get("status")
        .then((rResult) => {
          return pResolve(rResult.data);
        })
        .catch((rErr) => {
          return pReject(rErr);
        });
    });
  },

  //users
  /**
   * List of All users
   */
  usersList: () => {
    return new Promise((pResolve, pReject) => {
      return BaseAPI.get("users")
        .then((rResult) => {
          return pResolve(rResult.data);
        })
        .catch((rErr) => {
          return pReject(rErr);
        });
    });
  },

};
export default Api;
