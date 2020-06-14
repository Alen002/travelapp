import { post } from "./post";

const path = 'http://localhost:8080/remove';

function remove(event) {
    post(path, {});
};

export { remove };