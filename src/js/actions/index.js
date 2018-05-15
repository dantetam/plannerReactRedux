export const addArticle = article => ({
  type: "ADD_ARTICLE", //An enum to declare which action has been taken
  payload: article //The data to be sent with this action
});
