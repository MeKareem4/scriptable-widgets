let flightNumber = 'AA100'; // Replace with your flight number
let url = `https://aviation-edge.com/v2/public/flights?key=YOUR_API_KEY&flightIata=${flightNumber}`;
let req = new Request(url);
let res = await req.loadJSON();
let status = res[0].status;

let widget = new ListWidget();
widget.addText(`Flight ${flightNumber}`);
widget.addText(`Status: ${status}`);
widget.presentSmall();
Script.setWidget(widget);
