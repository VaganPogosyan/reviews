import { useEffect, useState } from "react";

export function useIsClient() {
  const [isCLient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isCLient;
}
