const aboutRoute = require('./aboutRoute');
const weatherRoute = require('./weatherRoute');

const routes = [
    {
        path: '/about',
        handler: aboutRoute
    },
    {
        path: '/weather',
        handler: weatherRoute
    },
    
    {
        path: '/',
        handler: (req, res) => res.render('index')
    },

    {
        path: '*',
        handler: (req, res) => res.render('404error', {
            errorMsg: 'Oops! Page Not Found'
        })
    }
];

module.exports = app => {
    routes.forEach(r => {
        if (r.path === '/') {
            app.get(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })

}
