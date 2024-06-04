import { useEffect, useState } from 'react';

export default function OnlyClientSide({ children }: any) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? <>{children}</> : null;
}
