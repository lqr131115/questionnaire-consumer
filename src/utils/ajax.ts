import path from "path";

const BASE_URL = "http://localhost:3001";

export async function get(url: string) {
  const res = await fetch(path.join(BASE_URL, url), {
    method: "GET",
  });
  return res.json();
}

export async function post(url: string, data: any) {
  const res = await fetch(path.join(BASE_URL, url), {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}
