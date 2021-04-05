import {createApp, h} from "vue";
import Users from "./components/Users/Users"
import Layout from "./components/Layout";
import User from "./components/Users/User";
import CreateUser from "./components/Users/CreateUser";

const root = document.getElementById('app')
const app = createApp({
    render(){
        console.log(JSON.parse(root.dataset.props));
        return h(app.component(root.dataset.component), JSON.parse(root.dataset.props));
    }
});
app.component('Layout', Layout)
app.component('Users', Users)
app.component('User', User)
app.component('CreateUser', CreateUser)
app.mount('#app');
