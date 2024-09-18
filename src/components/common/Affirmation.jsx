import useQuote from "../../hooks/useQuote";

const Affirmation = () => {
  const { loading, data, error } = useQuote();
  console.log(data);

  return (
    <p className="text-7xl leading-normal text-center">
      {loading ? "Getting your quote" : data.content ?? "this is fun"}
    </p>
  );
};

export default Affirmation;
