export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://afternoon-ravine-18602.herokuapp.com";
};


