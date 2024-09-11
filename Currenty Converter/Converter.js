let amount = 100; // Amount to convert
let fromCurrency = 'USD';
let toCurrency = 'EUR';

let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
let request = new Request(url);
let response = await request.loadJSON();
let rate = response.rates[toCurrency];
let converted = amount * rate;

let widget = new ListWidget();
widget.addText(`${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`);
widget.presentSmall();
Script.setWidget(widget);
