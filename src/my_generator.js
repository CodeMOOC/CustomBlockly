/**
 * Created by brendan.
 */

'use strict';

Blockly.JavaScript['test'] = function(block) {
    var code = '\n';
    return code;
};

Blockly.JavaScript['img_codemooc'] = function(block) {
    var code = '\n';
    return code;
};

Blockly.JavaScript['avanti_molti'] = function(block) {
    // Print statement.
    var operator = block.getFieldValue('STEPS');
    var argument0 = '';
    switch (operator) {
        case 'ten':
            argument0 = 'dieci';
            break;
        case 'fifty':
            argument0 = 'cinquanta';
            break;
        case 'onehundred':
            argument0 = 'cento';
            break;
    }
    return 'window.alert(\'hai avanzato di ' + argument0 + ' passi\');\n';
};