import router from './router'
import store from './store'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false }) 

router.beforeEach(async(to, from, next) => {
    NProgress.start()
        var token = window.sessionStorage.getItem('Authorization');
        if( token ) {
            if ( !(store.state.permission.addRoutes && store.state.permission.addRoutes.length>0) ) {
                try{
                    const roles = ["admin"]
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    router.addRoutes(accessRoutes)
                    next({ ...to, replace: true })
                }catch (error) {
                    console.log(error)
                }
            }else{
                next()
            }
        }else{
          if (to.path === '/login') {
                next()
            } else {
                next('/login')
            }
            NProgress.done()
        }
  
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
  })