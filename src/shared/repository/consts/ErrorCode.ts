type ErrorCode = "ParseType" | "Network";

type ErrorDescription = {
  text: string;
};

export const ErrorCodeDescriptions: Record<ErrorCodeEnum, ErrorDescription> =
  {};
