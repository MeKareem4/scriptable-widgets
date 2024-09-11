let loc = await Location.current();
let sun = await Weather.sun(loc.latitude, loc.longitude);

let widget = new ListWidget();
widget.addText(`Sunrise: ${sun.sunrise}`);
widget.addText(`Sunset: ${sun.sunset}`);
widget.presentSmall();
Script.setWidget(widget);
