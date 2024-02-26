import { getCookie, setCookie } from "./cookie";
import { TUserData, TIngredient, TOrder } from "./types";

export const ORDER_API_URL: string = "wss://norma.nomoreparties.space/orders/all";
const BURGER_API_URL: string = "https://norma.nomoreparties.space/api";

type THeaders = {
  Accept: string;
  "Content-Type": string;
};

const headers: THeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const checkResponse = (res: Response) =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

function request<T>(url: string, options: RequestInit): Promise<T> {
  return fetch(`${BURGER_API_URL}${url}`, options).then(checkResponse);
}

export const getIngredients = async (): Promise<TIngredient[]> => {
  const response = await request<{ data: TIngredient[] }>("/ingredients", { headers });
  return response.data;
};

export function getOrder(ingredients: string[]): Promise<TOrder> {
  return request<TOrder>("/orders", {
    headers: {
      ...headers,
      authorization: "Bearer " + getCookie("accessToken"),
    },
    method: "POST",
    body: JSON.stringify({ ingredients }),
  });
}

export function loginUser(data: { email: string; password: string }): Promise<TUserData> {
  return request<TUserData>("/auth/login", {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function registerUser(userData: TUserData): Promise<TUserData> {
  return request<TUserData>("/auth/register", {
    headers,
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export function updateToken(): Promise<void> {
  return request<{ accessToken: string; refreshToken: string }>("/auth/token", {
    headers,
    method: "POST",
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then((data) => {
    setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", data.refreshToken);
  });
}

export async function getUserData(): Promise<TUserData> {
  try {
    const response = await request<TUserData>("/auth/user", {
      headers: {
        ...headers,
        authorization: "Bearer " + getCookie("accessToken"),
      },
      method: "GET",
    });
    return response;
  } catch (err: any) {
    if (err.message === "jwt expired" && getCookie("refreshToken")) {
      await updateToken();
      return getUserData();
    }
    if (err instanceof Error && err.message === "jwt expired" && getCookie("refreshToken")) {
      await updateToken();
      return getUserData();
    }
    throw err;
  }
}

export async function updateUserData(userData: Partial<TUserData>): Promise<TUserData> {
  return request<TUserData>("/auth/user", {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    method: "PATCH",
    body: JSON.stringify(userData),
  });
}

export function logout(): Promise<void> {
  return request<void>("/auth/logout", {
    headers,
    method: "POST",
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  });
}

export function passwordReset(data: { email: string }): Promise<void> {
  return request<void>("/password-reset", {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function resetPassword(data: { token: string; password: string }): Promise<void> {
  return request<void>("/password-reset/reset", {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getChosenOrder(orderId: string): Promise<TOrder> {
  return request<TOrder>(`/orders/${orderId}`, {
    headers,
    method: "GET",
  });
}
