const POST_DIVS = document.querySelector('.post');

const URL_LINK =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=30b0b06e6e744426829935a494ac6c1c';

getNews(URL_LINK);

async function getNews(url) {
  const res = await fetch(url);
  const data = await res.json();
  //   showResults(data);
  console.log(data);
}

console.log(getNews);
