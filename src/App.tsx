import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Exercises from "./pages/Exercises/Exercises";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import MuscleDescriptionPage from "./pages/MuscleDescriptionPage";
import { Provider } from "react-redux";
import { store } from "./services/MuscleSlice";
import Routines from "./pages/Routines";
import Routine from "./pages/Routine";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route
                path="muscle-description"
                element={<MuscleDescriptionPage />}
              />
              <Route path="home" element={<Home />} />
              <Route path="exercises" element={<Exercises />} />
              <Route path="routines" element={<Routines />} />
              <Route path="routines/routine/:id" element={<Routine />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
