
export const getIngredients = async () => {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/ingredients"
  );

  if (!response.ok) {
    throw new Error(`Server`);
  }

  const responseData = await response.json();

  return responseData.data;
};

export const getOrder = async (ingredientIds) => {
  const response = await fetch("https://norma.nomoreparties.space/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: ingredientIds }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка при создании заказа: ${response.status}`);
  }

  return await response.json();
};

/////////_________________________
const config = {
  baseURL: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}


//POST https://norma.nomoreparties.space/api/auth/login - эндпоинт для авторизации.
//POST https://norma.nomoreparties.space/api/auth/register - эндпоинт для регистрации пользователя.
//POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
//POST https://norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена

//Регистрация пользователя
export function registerUser(email, password, name) {
  return fetch(`${config.baseURL}/auth/register`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(
      {
        "email": `${email}`,
        "password": `${password}`,
        "name": `${name}`
      }
    )
  })
    .then(res => checkResponse(res))
}


//Авторизация

export function loginUser(email, password) {
  return fetch(`${config.baseURL}/auth/login`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(
      {
        "email": `${email}`,
        "password": `${password}`,
      }
    )
  })
    .then(res => checkResponse(res))
}

//Обновления токена
export const refreshToken = () => {
  return fetch(`${config.baseURL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(res => checkResponse(res));
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

//Выхода из системы.
export function logoutUser() {
  return fetch(`${config.baseURL}/auth/logout`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(
      {
        // "token": getCookie("refreshToken")
        "token": refreshToken
      }
    )
  })
    .then(res => checkResponse(res))
}

//Получение письма для сброса пароля
export function forgotPasswordUser(email) {
  return fetch(`${config.baseURL}/password-reset`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      "email": `${email}`
    })
  })
    .then(res => checkResponse(res))
}

//Обновление пароля
export function resetPasswordUser(password, token) {
  return fetch(`${config.baseURL}/password-reset/reset`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(
      {
        "password": `${password}`,
        "token": `${token}`
      }
    )
  })
    .then(res => checkResponse(res))
}


//получение данных пользователя
export function getUserInfo() {
  return fetch(`${config.baseURL}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + getCookie('accessToken')
    },
  })
    .then(res => checkResponse(res))
}

//обновление данных пользователя через профиль
export function changeUserInfo (data) {
  return fetch(`${config.baseURL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + getCookie('accessToken')
    },
    body: JSON.stringify(data)
  })
    .then(res => checkResponse(res))
}
//
//
//


// изначальные данные

// export const getIngredients = async () => {
//   const response = await fetch(
//     "https://norma.nomoreparties.space/api/ingredients"
//   );

//   if (!response.ok) {
//     throw new Error(`Server`);
//   }

//   const responseData = await response.json();

//   return responseData.data;
// };

// export const getOrder = async (ingredientIds) => {
//   const response = await fetch("https://norma.nomoreparties.space/api/orders", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ ingredients: ingredientIds }),
//   });

//   if (!response.ok) {
//     throw new Error(`Ошибка при создании заказа: ${response.status}`);
//   }

//   return await response.json();
// };
