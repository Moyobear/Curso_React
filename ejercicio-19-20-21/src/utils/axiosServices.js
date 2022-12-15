import request from "./axios.config";

export function getRandomJoke() {
    return request.get("/", {
        validateStatus: function (status) {
            return status < 500;
        },
    });
}
