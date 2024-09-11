let loc = await Location.current();
let weather = await Weather.current(loc.latitude, loc.longitude);
let temp = Math.round(weather.temperature);
let desc = weather.conditionDescription;

let widget = new ListWidget();
widget.addText(`Temp: ${temp}°C`);
widget.addText(`Condition: ${desc}`);
widget.addText(`Location: ${weather.locationName}`);
widget.presentSmall();
Script.setWidget(widget);
