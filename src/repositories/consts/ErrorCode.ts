type ErrorCode = "ParseType" | "Network";

type ErrorDescription = {
  text: string;
};

export const ErrorCodeDescriptions: Record<ErrorCode, ErrorDescription> ={
  Network: {
    text: 'Network Error'
  },
  ParseType: {
    text: 'Parse type error'
  }
};
