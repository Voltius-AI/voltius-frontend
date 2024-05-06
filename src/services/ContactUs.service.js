import { useMutation } from "@tanstack/react-query";
import { APIInstance } from "./service";
import { toast } from "react-toastify";

export const useCreateContactService = () => {
  const { isError, isPending, isSuccess, mutate, status } = useMutation({
    mutationFn: createContactAPI,
    onSuccess: (data) => {
      toast.success("Thanks for reaching out! We'll be with you soon!");
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

const createContactAPI = async (data) => {
  const response = await APIInstance({
    method: "POST",
    url: "/contact/",
    data: {
      email: data.email,
      message: data.message,
    },
  });

  return {
    message: response?.data?.message,
  };
};
