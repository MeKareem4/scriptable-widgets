let habits = ['Exercise', 'Read', 'Meditate'];
let widget = new ListWidget();
widget.addText("Today's Habits:");

habits.forEach(habit => {
  let row = widget.addStack();
  let text = row.addText(`${habit}`);
  row.addSpacer();
  let checkBox = row.addText('[ ]');
});

widget.presentSmall();
Script.setWidget(widget);
