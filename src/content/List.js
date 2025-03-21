export async function Links(url){
    const data = await fetch(url);
    const results = await data.json();

    return {results};
}