'use strict';

import I18n from 'react-native-i18n';


I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!'
  },
  zh: {
    greeting: '你好!'
  }
};

module.exports = I18n;
