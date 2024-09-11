let quotes = [
    "Stay positive!",
    "You are capable of amazing things.",
    "Believe in yourself.",
    "Keep going."
  ];
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  let widget = new ListWidget();
  widget.addText(randomQuote);
  widget.presentSmall();
  Script.setWidget(widget);
  