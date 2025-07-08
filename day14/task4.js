//. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

//1.Make a fetchData function -->pass url
//                  --> pass a check startsWith for https throw the error ,handle it later
//run try--error.

function fetchData(url) {
  if (!url.startsWith("https")) {
    throw new Error("Invalid URL");
  }
  return console.log(`Data fetched from ${url}`);
}

try {
  const result = fetchData("https://www.google.com");
} catch (error) {
  console.error("Error", error.message);
}
