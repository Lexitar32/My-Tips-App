import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { NewUser } from "@interfaces/auth";
import toast from "react-hot-toast";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const signupUserFn = async (newUser: NewUser) => {
  const response = await apiClient.post("/auth/signup", newUser);
  return response.data;
};

export function useSignupUser() {
  const queryClient = useQueryClient();
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupUserFn,
    onSuccess: (result) => {
      toast.success("Sign up successful!", {
        duration: 4000,
        position: "top-center",
      });

      // Set token to localStorage
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      // Dispatch the user details to the context state
      dispatch({
        type: "SIGN_UP_USER",
        payload: {
          email: result.data.user.email,
          fullName: result.data.user.fullname,
          milestone: result.data.user.milestone,
          shareId: result.data.user.shareId,
          tip_index: result.data.tip_index,
        },
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
