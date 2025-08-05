import { useEffect, useState } from 'react';

export default function useDelayedLoader(
  isLoading: boolean,
  delay: number = 500,
) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isLoading) {
      timeout = setTimeout(() => setShowLoader(true), delay);
    } else {
      setShowLoader(false);
    }

    return () => clearTimeout(timeout);
  }, [delay, isLoading]);

  return showLoader;
}
