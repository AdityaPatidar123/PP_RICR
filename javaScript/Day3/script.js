const URL = "https://api.chucknorris.io/jokes/random";

async function getJokes() {
  const resolve = await fetch(URL);
  const data = await resolve.json();

  document.getElementById("icon").src = data.icon_url;

  document.getElementById("jokes").innerHTML = data.value;
}
