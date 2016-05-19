'use strict';

/*** HSV hue for all blocks in this category. ***/
Blockly.Blocks.texts.HUE = 160;

Blockly.Blocks['test'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};