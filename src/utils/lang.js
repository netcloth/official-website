import intl from 'react-intl-universal';


const _t = (key, options) => {
 return intl.get(key, options).d(key);
};

const _tHtml = (key, options) => {
  return intl.getHTML(key, options).d(key);
};

export {
  _t,
  _tHtml,
}
