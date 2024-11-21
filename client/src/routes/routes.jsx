import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Cart } from "../pages/user/Cart";
import { CoursePage } from "../pages/user/CoursePage";
import { CourseDetailsPage } from "../pages/user/CourseDetailsPage";
import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { UserLayout } from "../layout/UserLayout";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProfilePage } from "../pages/user/ProfilePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "courseDetails/:id",
                element: <CourseDetailsPage />,
            },
            {
                element: <ProtectedRoute />,
                path: "user",
                children: [
                    {
                        path: "whishlist",
                        element: <h1>Wishlist</h1>,
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
                    },
                    {
                        path: "cart",
                        element: <Cart />,
                    },
                    {
                        path: "order",
                        element: <h1> orders page</h1>,
                    },
                ],
            },
        ],
    },
    {
        path: "mentor",
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login  role="mentor"/>,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "courseDetails/:id",
                element: <CourseDetailsPage />,
            },
            {
                element: <ProtectedRoute />,
                path: "user",
                children: [
                    {
                        path: "whishlist",
                        element: <h1>Wishlist</h1>,
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
                    },
                    {
                        path: "cart",
                        element: <Cart />,
                    },
                    {
                        path: "order",
                        element: <h1> orders page</h1>,
                    },
                ],
            },
        ],
    },
]);
