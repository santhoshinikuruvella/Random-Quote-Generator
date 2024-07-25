const col = [
    '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c',
    '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99',
    '#77B1A9', '#73A857'
  ];
  
  const button = document.getElementById("new");
  const container = document.getElementById("box");
  const quote = document.getElementById("text");
  const author = document.getElementById("author");
  
  const body = document.getElementById("bo");
  const facebook = document.getElementById("fb");
  const twitter = document.getElementById("tw");
  
  button.addEventListener("click", async () => {
    const url = "https://type.fit/api/quotes"; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        alert("Unable to load the data");
        return;
      }
      const data = await response.json();
      renQuote(data);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  });
  function ranCol()
  {
    const colIndex = Math.floor(Math.random() * col.length);
    body.style.backgroundColor = col[colIndex];
    facebook.style.backgroundColor = col[colIndex];
    twitter.style.backgroundColor = col[colIndex];
    author.style.color = col[colIndex];
    quote.style.color = col[colIndex];
    button.style.backgroundColor=col[colIndex];
  }
  function renQuote(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
   
    const selectedQuote = data[randomIndex];
  
    quote.textContent = selectedQuote.text;
    author.textContent = selectedQuote.author || "Unknown";
    ranCol();
   
  }
