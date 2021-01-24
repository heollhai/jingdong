import require from "../../utils/request.js";
export function Reguster(user) {
  return require({
    url: "reguster",
    method: "get",
    params: user
  });
}
export function Login(user) {
  return require({
    url: "login",
    method: "get",
    params: user
  });
}
