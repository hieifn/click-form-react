import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;

export function clickRequests(paramRequest, paramUrl) {
    return fetch(`${baseUrl}/${paramUrl}/`, {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(paramRequest)
    })
        .then(handleResponse)
        .catch(handleError);
}