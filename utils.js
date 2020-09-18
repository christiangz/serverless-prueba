'use strict';

const translate = require('translate');

translate.to = 'es';
translate.engine = 'yandex';
translate.key = process.env.YANDEX_KEY;

const _translate = async (text) => {
  return await translate(text.replace("_", " "));
};

module.exports = { _translate };