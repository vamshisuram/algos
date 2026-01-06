
const state = {
    // route - widget mapping
    routes: {
        home: 'Home',
        billing: 'Billing'
    },

    // widget - bundle mapping
    bundles: {
        'Home': './public/home.js',
        'Billing': './public/billing.js'
    }
}


// document.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu');
//     menu.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log('clicked');
//     });
// });


const menu = document.querySelector('.menu')

menu.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const route = e.target.href.split('/').pop();
    render(route)
})

menu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const route = e.target.href.split('/').pop();
    render(route)
})

// check url - getwidget - get bundle - invoke
const route = location.pathname.split('/').pop()

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

function render(route) {
    const widget = state.routes[route]
    const bundle = state.bundles[widget]
    
    const script = document.createElement("script");
    script.src = bundle;
    script.onload = () => {
        const Widget = window[widget];
        root.render(Widget);
    };

    document.body.appendChild(script);

}


