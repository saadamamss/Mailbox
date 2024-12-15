import { createContext, useState } from "react";

export const Store = createContext();

export default function StoreProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const vars = {
    auth,
    setAuth,
    loading,
    setLoading,
  };
  return <Store.Provider value={vars}>{children}</Store.Provider>;
}
