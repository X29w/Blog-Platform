"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";

interface ProviderProps extends PropsWithChildren {}
const queryClient = new QueryClient();

const Provider: FC<ProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default Provider;
