//Funciones para leer y escribir el token

//Esta guarda el token
export function saveToken(token) {
  localStorage.setItem("token", token);
}
// Esta borra el token
export function deleteToken() {
  localStorage.removeItem("token");
}
//esta coge el token
export function getToken() {
  return localStorage.getItem("token");
}
//esta guarda el token para que la pagina siga logeada despues de cerrarla o refrescar
export function isLoggedIn() {
  return !!getToken();
}
