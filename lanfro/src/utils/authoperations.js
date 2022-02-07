function getToken() {
    if (window.localStorage) {
        return localStorage.getItem("token");
    }
    return "";
}

function isAuthenticated() {
    if (window.localStorage) {
        const token = localStorage.getItem("token");
        return Boolean(token);
    }
    return false;
}

function setToken(token) {
    if (window.localStorage) {
        const settoken = localStorage.setItem("token", token);
        return settoken;
    }
}

function setNameinls(name) {
    if (window.localStorage) {
        const setnameinls = localStorage.setItem("name", name);
        return setnameinls;
    }
}

function getNameinls() {
    if (window.localStorage) {
        return localStorage.getItem("name");
    }
    return "";
}

export { getToken, isAuthenticated, setToken, setNameinls, getNameinls };