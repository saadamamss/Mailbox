import { useContext, useEffect, useState } from "react";
import { Store } from "./redux/context";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const { loading, setLoading } = useContext(Store);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (loading) {
      console.log("loading: " + loading);
    }
    setLoading(false);
  }, [loading]);

  return !loading && <Outlet />;
}
