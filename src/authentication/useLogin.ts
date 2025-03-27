import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi, LoginProps } from "../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, status } = useMutation({
    mutationFn: ({ email, password }: LoginProps) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/home");
    },

    onError: (err) => {
      console.log(err.message);
      toast.error("provided email or password are incorrect");
    },
  });

  const isLoading = status === "pending";

  return { login, isLoading };
}
