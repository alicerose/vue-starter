import store from '@/store';

/**
 * ページタイトル設定
 * @todo: サイトタイトルの一元管理
 * @param pathTitle
 * @returns {string}
 */
export const setTitle = pathTitle => {
  const siteTitle = 'WebPage';
  const pageTitle = !pathTitle ? siteTitle : pathTitle + ' | ' + siteTitle;
  return (window.document.title = pageTitle);
};

/**
 * Description設定
 * @param pathMeta
 */
export const setDescription = pathMeta => {
  const defaultDescription = 'This is initial description.';
  const description = pathMeta ? pathMeta : defaultDescription;
  document
    .querySelector("meta[name='description']")
    .setAttribute('content', description);
};

export const globalMixins = {
  methods: {
    setTitle,
    setDescription,
  },
};
