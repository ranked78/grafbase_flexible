"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i: number) => (
          <button key={i}>{provider.id}</button>
        ))}
      </div>
    );
  }

  return null; // Return null if providers is null
};

export default AuthProviders;
