import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../services/apiAuth";

export interface UpdateUserProps {
  fullName: string;
  email: string;
  password: string;
}

export function useUpdateUser() {
  const { mutate: updateUser, status } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (user) => {
      toast.success("Account successfully updated!");
    },
  });
  const isLoading = status === "pending";

  return { updateUser, isLoading };
}
