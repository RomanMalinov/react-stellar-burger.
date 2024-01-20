import { getCookie, setCookie } from "./cookie";

const BURGER_API_URL = "https://norma.nomoreparties.space/api";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const checkResponse = (res) =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getIngredients = async () => {
  const response = await fetch(`${BURGER_API_URL}/ingredients`);
  const responseData = await checkResponse(response);
  return responseData.data;
};

export function getOrder(ingredients) {
  const url = `${BURGER_API_URL}/orders`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
}

export function loginUser(data) {
  const url = `${BURGER_API_URL}/auth/login`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify({ ...data }),
  }).then(checkResponse);
}

export function registerUser(userData) {
  const url = `${BURGER_API_URL}/auth/register`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify(userData),
  }).then(checkResponse);
}

export function updateToken() {
  const url = `${BURGER_API_URL}/auth/token`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then((data) => {
    setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", data.refreshToken);
  });
}

export async function getUserData() {
  const url = `${BURGER_API_URL}/auth/user`;
  try {
    const response = await fetch(url, {
      headers: {
        ...headers,
        authorization: "Bearer " + getCookie("accessToken"),
      },
      method: "GET",
    });
    return checkResponse(response);
  } catch (err) {
    if (err.message === "jwt expired" && getCookie("refreshToken")) {
      await updateToken();
      return getUserData();
    }
    throw err;
  }
}

export async function updateUserData(userData) {
  const url = `${BURGER_API_URL}/auth/user`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: "Bearer " + getCookie("accessToken"),
      },
      method: "PATCH",
      body: JSON.stringify(userData),
    });
    return checkResponse(response);
  } catch (err) {
    if (err.message === "jwt expired" && getCookie("refreshToken")) {
      await updateToken();
      return updateUserData(userData);
    }
    throw err;
  }
}

export function logout() {
  const url = `${BURGER_API_URL}/auth/logout`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then(checkResponse);
}


export function passwordReset(data) {
  const url = `${BURGER_API_URL}/password-reset`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify({ ...data }),
  }).then(checkResponse);
}

export function resetPassword(data) {
  const url = `${BURGER_API_URL}/password-reset/reset`;
  return fetch(url, {
    headers: { ...headers },
    method: "POST",
    body: JSON.stringify({ ...data }),
  }).then(checkResponse);
}






