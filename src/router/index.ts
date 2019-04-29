import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router: any = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

/**
 * Signature of all route guards:
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 * 
 * See http://router.vuejs.org/en/advanced/navigation-guards.html
 * for more details.
 */
// router.beforeEach((to: any, from: any, next: any): void => {
//   code
// })

/**
 * Global After Hooks
 */
// router.afterEach((to: any, from: any): void => {
//   code
// })

export default router