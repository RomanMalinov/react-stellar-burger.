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
