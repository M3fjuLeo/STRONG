import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../services/apiAuth";

export interface SignUpProps {
  fullName: string;
  email: string;
  password: string;
}

export function useSignup() {
  const { mutate: signup, status } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email adress."
      );
    },
  });
  const isLoading = status === "pending";

  return { signup, isLoading };
}
