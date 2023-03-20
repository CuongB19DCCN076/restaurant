import About from "../component/About";
import Contact from "../component/Contact";
import Home from "../component/Home";
import Products from "../component/Products";

const publicRouters = [
    { path: '/' , component: Home },
    { path: '/products' , component: Products },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

export {publicRouters}