export const defaults = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "same-origin", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

export const post = (url, body) =>
  fetch(url, {
    ...defaults,
    body: JSON.stringify({ name: "", tel: "", third: "", ...body }),
  }).then(res => res.json())
export const get = (url, body) =>
  fetch(url, { ...defaults, method: "GET" }).then(res => res.json())
