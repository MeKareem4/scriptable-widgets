let tasks = [
    { task: 'Complete report', priority: 'High' },
    { task: 'Buy groceries', priority: 'Medium' },
    { task: 'Call friend', priority: 'Low' }
  ];
  
  let widget = new ListWidget();
  tasks.forEach(({ task, priority }) => {
    let row = widget.addStack();
    row.addText(`${task}`);
    row.addSpacer();
    let priorityText = row.addText(`[${priority}]`);
    priorityText.textColor = Color.red();
  });
  widget.presentMedium();
  Script.setWidget(widget);
  