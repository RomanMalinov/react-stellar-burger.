const api = "https://norma.nomoreparties.space/api/ingredients";

export const getIngredients = async () => {
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`Ошибка при запросе к серверу: ${response.status}`);
  }
  
  const responseData = await response.json();
  return responseData && responseData.data && Array.isArray(responseData.data)
    ? responseData.data
    : (() => {
        throw new Error("Неверный формат данных из API");
      })();
};
