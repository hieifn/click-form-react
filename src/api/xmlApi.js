import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_API_URL + "/getBaXmls/";

export function getXmls() {
    return fetch("/getBaXmls/", {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify()
    })
        .then(handleResponse)
        .catch(handleError);
}
