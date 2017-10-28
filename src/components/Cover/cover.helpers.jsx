export default {
  googleSignInClientInit: () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }
};