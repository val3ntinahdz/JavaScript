// This is a reusable piece of my app that can be called anywhere!

/**
 * @returns {Promise<Object>} quote info
 */
const fetchQuote = async() =>{
    // cors allows us to work on different domains in the backend (Cross-Origin Resource Sharing)
    // more about it in the following docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    
    let dataInfo = data[0]; // the JSON object
    return dataInfo;
}


/**
 * 
 * @param {HTMLDivElement} element 
*/
export const BreakingbadApp = async(element) => {
    // console.log(element);
    document.querySelector("#app-title").innerHTML = "Breaking Bad App";
    const quoteExtracted = await fetchQuote();

    // create the necessary HTML elements
    const quoteLabel = document.createElement("blockquote");
    const authorLabel = document.createElement("h3");
    const nextQuoteBtn = document.createElement("button");
    nextQuoteBtn.innerText = "Next quote";

    const renderQuote = (dataInfo) => {
        console.log("DATA:", dataInfo);

        const { quote, author } = dataInfo;
        quoteLabel.innerHTML = quote;
        authorLabel.innerHTML = author;

        element.replaceChildren(quoteLabel, authorLabel, nextQuoteBtn);
    }

    fetchQuote()
        .then(renderQuote);
}