function newButton(text, callback) {
  const $body = document.querySelector("body");
  const $button = document.createElement("button");
  $button.textContent = text;

  callback($button);

  $body.insertAdjacentElement("beforeend", $button);
  return $button;
}

newButton("Login", (button) => {
  button.style.cssText = `
    margin-right: 20px;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    font-size: 30px;
    color: blue;
  `;
  button.addEventListener("click", () => {
    console.log("Login foi clicado!");
  });
});

newButton("Cadastre-se", (button) => {
  button.style.cssText = `
    border-radius: 10px;
    width: 220px;
    height: 50px;
    font-size: 30px;
    color: red;
  `;
  button.addEventListener("click", () => {
    console.log("Cadastre-se foi clicado!");
  });
});
