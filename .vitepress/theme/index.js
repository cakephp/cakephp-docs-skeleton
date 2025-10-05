import DefaultTheme from 'vitepress/theme-without-fonts'
import PageLoader from "./components/PageLoader.vue";
import './custom.css'
import { h } from "vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(PageLoader),
    })
  }
}
