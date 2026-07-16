fetch('https://broad-lake-b1fb.indie-the-duck.workers.dev', {
})
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML += `<p class="text-xl font-bold text-blue-500">${data.ranks.premier} (winrate: ${Math.round(data.winrate * 100)}%)</p> <p>this data is live! provided by leetify.com</p>`;
  })
  .catch(error => console.error('Error:', error));