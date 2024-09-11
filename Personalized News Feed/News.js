let rssUrl = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'; // Example RSS Feed
let req = new Request(rssUrl);
let res = await req.loadString();
let parser = new XMLParser(res);
let items = parser.items();
let news = items.slice(0, 3).map(i => i.title);

let widget = new ListWidget();
news.forEach((headline, idx) => {
  widget.addText(`${idx + 1}. ${headline}`);
});
widget.presentMedium();
Script.setWidget(widget);
