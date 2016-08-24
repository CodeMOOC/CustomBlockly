'use strict';

/*** HSV hue for all blocks in this category. ***/
Blockly.Blocks.texts.HUE = 160;

Blockly.Blocks['test'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck('String')
        .appendField(new Blockly.FieldTextInput("inserisci del testo..."), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['avanti_molti'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("vai avanti di")
        .appendField(new Blockly.FieldDropdown([["10", "ten"], ["50", "fifty"], ["100", "onehundred"]]), "STEPS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['calcola'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("calcola")
        .appendField(new Blockly.FieldDropdown([["somma", "OPTIONNAME"], ["prodotto", "OPTIONNAME"], ["differenza", "OPTIONNAME"]]), "NAME");
    this.appendDummyInput()
        .appendField("tra");
    this.appendValueInput("operando_1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("e");
    this.appendValueInput("operando_2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['img_codemooc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/codemooc.png", 140, 50, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};