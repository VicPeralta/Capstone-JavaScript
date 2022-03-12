function callData(data) {
  console.log(data);
}
const script = document.createElement('script');
script.src = 'https://itunes.apple.com/search?term=javascript&media=ebook&limit=48&country=US&callback=callData';
document.body.append(script);