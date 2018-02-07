import Vue from 'vue'
// import config from '@/config'
import VueI18n from 'vue-i18n'
import helper from '../helper'
import axios from 'axios'
import store from '@/store'

const locales = ['zh-CN', 'en-US', 'es']

Vue.use(VueI18n)




let messages = {}
locales.forEach(v => {
  messages[v] = require(`./${v}/index`).default
})
// messages = store.state.propertiesStore.properties

const i18n = new VueI18n({
  locale: helper.ls.get('locale', "es"),
  // locale: helper.ls.get('locale', "zh-CN"),
  silentTranslationWarn: true,
  messages
})

// axios.get('/api/v1/translations/list/en', {
//   headers: {
//     'Content-Type': 'application/vnd.api+json',
//     'Accept': 'application/vnd.api+json'
//   }
// }).then((response) => {
//   console.log(axios)
//   debugger
//   // commit('setProperties', { result: response.data })
// }, (err) => {
//   console.log(err)
// })


// http://digital-cult.com/vue-i18n-async-loading-languages/

 
// const loadedLanguages = ['en'] // our default language that is prelaoded 
 
// export function loadLanguageAsync (lang) {
//   debugger
//   if (i18n.locale !== lang) {
//     if (!loadedLanguages.contains(lang)) {
//       // return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(msgs => {
//       //   i18n.setLocaleMessage(lang, msgs.default)
//       //   loadedLanguages.push(lang)
//       //   return setI18nLanguage(lang)
//       // })
//     } 
//     return Promise.resolve(setI18nLanguage(lang))
//   }
//   return Promise.resolve(lang)
// }
 
// function setI18nLanguage (lang) {
//   i18n.locale = lang
//   axios.defaults.headers.common['Accept-Language'] = lang
//   document.querySelector('html').setAttribute('lang', lang)
//   return lang
// }
// debugger
export default i18n
