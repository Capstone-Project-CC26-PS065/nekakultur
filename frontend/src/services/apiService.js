import BASE_URL from "../api";

export const apiFetch = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? "Bearer " + token : "",
    },
    body: body ? JSON.stringify(body) : null,
  });

  return res.json();
};