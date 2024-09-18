import { useQuery } from "react-query";

function useQuote() {
  const getQuote = async () => {
    const res = await fetch("https://api.quotable.io/quotes/random");
    return res.json();
  };

  const { data, error, loading } = useQuery("randomQuote", getQuote);

  return { loading, data, error };
}

export default useQuote;
