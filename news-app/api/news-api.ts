async function Api() {

  const _apiKey = import.meta.env.VITE_API_KEY
  console.log(_apiKey)
  const _url = `https://newsapi.org/v2/everything?q=everything&apiKey=${_apiKey}`;
  try {

    const response = await fetch(_url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.articles[1]

  } catch (error: unknown) {

    if (error instanceof Error) {
        return error.message
    } else {
        return error
    }

  }

}

export default Api