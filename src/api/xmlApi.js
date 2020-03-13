import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/xml_list/";

export function getXmls() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
