import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ExistingUser } from "@interfaces/auth";
import toast from "react-hot-toast";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "@hooks/useLocalStorage";

const loginUserFn = async (user: ExistingUser) => {
  const response = await apiClient.post("/auth/signin", user);
  return response.data;
};

export function useLoginUser() {
  const queryClient = useQueryClient();
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUserFn,
    onSuccess: (result) => {
      toast.success("Sign in successful!", {
        duration: 4000,
        position: "top-center",
      });

      // Set token and user to localStorage
      const user = {
        email: result.data.user.email,
        fullName: result.data.user.fullname,
        milestone: result.data.user.milestone,
        shareId: result.data.user.shareId,
        tip_index: result.data.tip_index,
      };

      const accessToken = result.data.accessToken;
      useLocalStorage("accessToken", accessToken);
      useLocalStorage("userDetails", user);

      // Dispatch the user details to the context state
      dispatch({
        type: "LOG_IN_USER",
        payload: user,
      });

      // Set the signed-up user in the cache
      queryClient.setQueryData(["user"], result);

      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message, {
        duration: 4000,
        position: "top-center",
      });
    },
    onSettled: () => {
      // Invalidate any user-related queries to ensure fresh data
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
