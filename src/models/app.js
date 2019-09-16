import storage from 'utils/storage';

import intl from 'react-intl-universal';

const locales = {
  "en_US": require('./locale/en_US'),
  "zh_CN": require('./locale/zh_CH'),
};

const getLang = (lang) => {
  return locales[lang];
};

const DEFAULT_LANG = 'zh_CN';

export default {
  namespace: 'app',
  state: {
    currentLocale: DEFAULT_LANG,
    langReady: false,
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    *setLang({ payload }, { put, call }) {
      const lang = (payload || {}).lang || storage.getItem('lang') || DEFAULT_LANG;
      const data = yield call(getLang, lang);
      yield intl.init({
        currentLocale: lang,
        locales: {
          [lang]: data,
        },
      });
      yield put({
        type: 'update',
        payload: {
          currentLocale: lang,
          langReady: true,
        }
      });
      storage.setItem('lang', lang);
    }
  },
  subscriptions: {
    setUp({ dispatch }) {
      dispatch({
        type: 'setLang'
      });
    }
  }
};
