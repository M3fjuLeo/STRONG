import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Exercises from "./pages/Exercises/Exercises";
import History from "./pages/History";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import MuscleDescriptionPage from "./pages/MuscleDescriptionPage";
import { Provider } from "react-redux";
import { store } from "./services/MuscleSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych: ", error);
      });
  }, []);

  console.log(data);

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
              <Route path="history" element={<History />} />
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
