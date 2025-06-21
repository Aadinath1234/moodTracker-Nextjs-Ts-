import React, { useEffect } from "react";
import { useRouter } from "next/router";

const withRedirectIfAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const RedirectIfAuth = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user && user.token) {
        router.replace("/Home");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return RedirectIfAuth;
};

export default withRedirectIfAuth;
