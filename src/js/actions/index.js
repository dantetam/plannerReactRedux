export const addArticle = article => ({
  type: "ADD_ARTICLE", //An enum to declare which action has been taken
  payload: article //The data to be sent with this action
});

export const changeProgressArticle = article => ({
  type: "TOGGLE_PROGRESS",
  payload: article
});

export const randomizeArticles = () => ({
  type: "RANDOMIZE_ARTICLES",
  payload: null
});

export const postTestComplete = (res) => ({
    type: "HTTP_REQUEST",
    payload: res
})

export function postTest () {
    const url = "/postproxy";
    return fetch(url, {
        method: "POST",
        credentials : "same-origin",
        body: "",
        query: "",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        // res.ok - The ok read-only property of the Response interface contains a boolean 
        // stating whether the response was successful. (status in the range 200-299) or not.
        console.log("This is the result of the POST request on the server: ");
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res.json());
      })
}
