const isProduction = process.env.NODE_ENV === "production";

//Bronzer backend host
export const PRIMER_HOST = process.env.REACT_APP_PRIMER_HOST;

//Token URL
const tokenAPIPath = "/api/login";
export const tokenUrl = isProduction
  ? PRIMER_HOST + tokenAPIPath
  : tokenAPIPath;

//Submission URL
const submissionAPIPath = "/api/user";
export const submissionUrl = isProduction
  ? PRIMER_HOST + submissionAPIPath
  : submissionAPIPath;
