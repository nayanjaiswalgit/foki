import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

export const useFieldOptions = (fetchOptions, dependencyValue) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (fetchOptions) {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchOptions(dependencyValue);
        setOptions(data);
      } catch (error) {
        setError("Failed to fetch options");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [fetchOptions, dependencyValue]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { options, loading, error };
};
