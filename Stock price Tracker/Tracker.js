let symbol = 'AAPL'; // Change to your stock symbol
let url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=YOUR_API_KEY`;
let req = new Request(url);
let res = await req.loadJSON();
let price = res.c;

let widget = new ListWidget();
widget.addText(`${symbol}: $${price}`);
widget.presentSmall();
Script.setWidget(widget);
