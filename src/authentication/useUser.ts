import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const fullName = user?.user_metadata.fullName?.split(" ")[0] || "User";
  const email = user?.user_metadata.email || user?.email;

  return {
    user,
    email,
    fullName,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}
