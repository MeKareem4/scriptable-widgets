let battery = Device.batteryLevel() * 100;
let widget = new ListWidget();
widget.addText(`Battery: ${Math.round(battery)}%`);
widget.presentSmall();
Script.setWidget(widget);
