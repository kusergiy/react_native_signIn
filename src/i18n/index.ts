import i18n, {TranslateOptions} from 'i18n-js';
import memoize from 'lodash.memoize';

import {I18nManager} from 'react-native';
import {LANGUAGES} from '@constants/data';

const translationGetters: any = {
    en: () => require('./translation/en.json'),
    sw: () => require('./translation/sw.json')
};

const translate: any = memoize(
    (key: string, config: TranslateOptions) => i18n.t(key, config),
    (key: string, config: TranslateOptions) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = (option: {languageTag: string; isRTL: boolean} | null) => {
    let fallback = {languageTag: LANGUAGES.ENGLISH, isRTL: false};

    if (option !== null) {
        fallback = option;
    }

    let {languageTag, isRTL} = fallback;
    languageTag = languageTag === LANGUAGES.ENGLISH ? LANGUAGES.ENGLISH : LANGUAGES.SWEDEN;
    translate.cache.clear();
    I18nManager.forceRTL(isRTL);
    i18n.translations = {[languageTag]: translationGetters[languageTag]()};
    i18n.locale = languageTag;
};

export {translate};

export default setI18nConfig;
