/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LoginLayout from "./layouts/login-layout";
import Courses from "./pages/courses";
import LoginPage from "./pages/login";
import Grades from "./pages/grades";
import CalendarPage from "./pages/calendar";
import ProtectedRoute from "./components/protected-route";
import NotificationSettings from "./pages/notification-settings";
import VerifyBlackboard from "./pages/verify-blackboard";
import VerifiedRoute from "./components/verified-route";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/courses",
        element: (
          <VerifiedRoute>
            <Courses />
          </VerifiedRoute>
        ),
      },
      {
        path: "/grades",
        element: (
          <VerifiedRoute>
            <Grades />
          </VerifiedRoute>
        ),
      },
      {
        path: "/calendar",
        element: (
          <VerifiedRoute>
            <CalendarPage />
          </VerifiedRoute>
        ),
      },
      {
        path: "/notifications",
        element: (
          <VerifiedRoute>
            <NotificationSettings />
          </VerifiedRoute>
        ),
      },
    ],
  },
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/blackboard-verification",
        element: (
          <ProtectedRoute>
            <VerifyBlackboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
