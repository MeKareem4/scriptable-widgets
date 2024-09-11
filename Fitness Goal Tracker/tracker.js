let steps = Health.standHoursToday();
let goal = 10000; // Daily steps goal

let widget = new ListWidget();
widget.addText(`Steps: ${steps}`);
widget.addText(`Goal: ${goal}`);
widget.presentSmall();
Script.setWidget(widget);
