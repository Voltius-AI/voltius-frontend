import { useMutation } from "@tanstack/react-query";
import { APIInstance } from "./service";
import { toast } from "react-toastify";

export const useCreateWaitlistService = () => {
  const { isError, isPending, isSuccess, mutate, status } = useMutation({
    mutationFn: createWaitlistAPI,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });

  return {
    isLoading: isPending,
    isSuccess,
    isError,
    mutate,
  };
};

const createWaitlistAPI = async (data) => {
  const response = await APIInstance({
    method: "POST",
    url: "/waitlist/",
    data: {
      email: data.email,
    },
  });

  return {
    message: response?.data?.message,
  };
};
