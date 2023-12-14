export type AnyObject = { [key in string]: any };

export type CallbackData = AnyObject | AnyObject[];

export type UseApiMutationOptions = {
  onSuccess?: (data: CallbackData) => void;
  onError?: (error: CallbackData) => void;
};
