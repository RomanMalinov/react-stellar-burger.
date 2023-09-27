export const getIngredients = async () => {
  const api = "https://norma.nomoreparties.space/api/ingredients";
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`Ошибка при запросе к серверу: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData.data || [];
};

export const getOrder = async (ingredientIds) => {
  const api = "https://norma.nomoreparties.space/api/orders";
  const response = await fetch(api, {
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
