import {createApp, h} from "vue";
import Users from "./components/Users/Users"
import Layout from "./components/Layout";
import UserDetail from "./components/Users/UserDetail";
import CreateUser from "./components/Users/CreateUser";
import EditUser from "./components/Users/EditUser";

const root = document.getElementById('app')
const app = createApp({
    render(){
        console.log(JSON.parse(root.dataset.props));
        return h(app.component(root.dataset.component), JSON.parse(root.dataset.props));
    }
});
app.component('Layout', Layout)
app.component('Users', Users)
app.component('UserDetail', UserDetail)
app.component('CreateUser', CreateUser)
app.component('EditUser', EditUser)
app.mount('#app');
