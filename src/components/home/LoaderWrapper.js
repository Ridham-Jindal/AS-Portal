"use client";
import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return loading ? <PreLoader /> : children;
};

export default LoaderWrapper;

