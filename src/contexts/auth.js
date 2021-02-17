import { createContext, useContext, useState } from "react";
/**
 * Used for creating the authentication context
 */
export const AuthContext = createContext();

const { Provider } = AuthContext;

/**
 * The provider for auth context.
 * @params {React.Component} children The tree which has access to the auth context.
 */
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  return <Provider value={{ authState, setAuthState }}>{children}</Provider>;
};

/**
 * Used for consuming the authentication context
 * @returns The utility to consume the context.
 */
export function useAuth() {
  return useContext(AuthContext);
}
