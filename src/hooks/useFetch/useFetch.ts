import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string) => {
  const [state, setState] = useState({
    data: undefined,
    isLoading: true,
    error: {
      hasError: false,
      message: '',
    },
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        error: {
          hasError: false,
          message: '',
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        setState({
          data: undefined,
          isLoading: false,
          error: {
            hasError: true,
            message: error.message,
          },
        });
      }
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data as T,
    isLoading: state.isLoading,
    error: state.error,
  };
};
