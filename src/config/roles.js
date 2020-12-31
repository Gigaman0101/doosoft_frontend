import Success from "../components/Success/Success";
import AdminPage from "../containers/pages/AdminPage/AdminPage";
import AdminRegister from "../containers/pages/Admin_Register/AdminRegister";
import Home from "../containers/pages/Home/Home";
import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";

const components = {
    register: {
        path: "/register",
        page: Register
    },
    home: {
        path: "/",
        page: Home
    },
    admin_page: {
        path: "/admin",
        page: AdminPage
    },
    admin_register: {
        path: "/register_admin",
        page: AdminRegister
    },
    login: {
        path: "/login_admin",
        page: Login
    },
    success: {
        path: "/success",
        page: Success
    }
};

const roles = {
    ADMIN: [
        components.admin_page
    ],
    GUEST: [
        components.register,
        components.login,
        components.home,
        components.success,
        components.admin_register
    ]
};

export default roles;