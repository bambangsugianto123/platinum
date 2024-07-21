export function getAuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.access_token) {
    console.log(user);
    return { access_token: user.access_token };
  } else {
    return {};
  }
}
