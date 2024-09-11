let widget = new ListWidget();
widget.addText("Shortcuts");
widget.addSpacer();

let shortcuts = ["Send Message", "Open Safari", "Take a Photo"];
shortcuts.forEach(shortcut => {
  let row = widget.addStack();
  row.addText(shortcut);
});

widget.presentMedium();
Script.setWidget(widget);
