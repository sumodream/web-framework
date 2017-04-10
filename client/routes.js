// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}
const routes = {
    childRoutes: [{
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./pages/components/Home'))
                }, 'home')
            }
        },
        childRoutes: [{
            path: 'explore',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./pages/components/Explore'))
                }, 'explore')
            }
        }, {
            path: 'about',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./pages/components/About'))
                }, 'about')
            }
        }]
    }]
}

export default routes
