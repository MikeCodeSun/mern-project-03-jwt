const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const info = document.getElementById("info");
const infoBtn = document.getElementById("info-btn");

loginBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  await axios
    .post("/api/v1/login", { username, password })
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem("token", JSON.stringify(res.data.token));
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
    });

  usernameInput.value = "";
  passwordInput.value = "";
});

infoBtn.addEventListener("click", async function (e) {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    info.textContent = "no authorization";
  }

  const auth = "Bearer " + token;

  await axios
    .get("/api/v1/dashboard", {
      headers: {
        Authorization: auth,
      },
    })
    .then((res) => {
      info.textContent = res.data.msg;
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
    });
});

const start = () => {
  localStorage.removeItem("token");
};

start();
