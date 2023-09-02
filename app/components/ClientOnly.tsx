"use client";
import { useEffect, useState } from "react";

const ClientOnly = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return <div>success</div>;
};

export default ClientOnly;
