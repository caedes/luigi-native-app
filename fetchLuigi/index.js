export default async function fetchLuigi(route) {
  const baseUri = "https://my-json-server.typicode.com/caedes/yamato-sushi-app";
  const response = await fetch(`${baseUri}${route}`);
  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}
