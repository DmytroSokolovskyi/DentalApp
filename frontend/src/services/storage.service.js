export const saveTokens = (access_token, refresh_token) => {
    sessionStorage.setItem("access_token", JSON.stringify(access_token));
    sessionStorage.setItem("refresh_token", JSON.stringify(refresh_token));
};

export const destroyTokens = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
};

export const getToken = (tokenName) => {
    return JSON.parse(sessionStorage.getItem(tokenName));
};

export const getAuth = () => {
    return JSON.parse(localStorage.getItem("auth"));
};

export const saveAuthToLocal = (auth, user) => {
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("user", JSON.stringify(user));
};

export const destroyAuthToLocal = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
};
