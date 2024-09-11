let eventDate = new Date('2024-12-25'); // Set your event date here
let now = new Date();
let diff = eventDate - now;
let days = Math.floor(diff / (1000 * 60 * 60 * 24));

let widget = new ListWidget();
widget.addText(`Days until event: ${days}`);
widget.presentSmall();
Script.setWidget(widget);
