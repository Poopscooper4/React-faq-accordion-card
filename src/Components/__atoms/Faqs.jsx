import React, { useEffect, useState } from "react";
import axios from "axios";

const Faqs = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((response) => {
        setQuotes(response.data.quotes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {quotes.map((quote, index) => (
        <div key={index}>
          <p>{quote.quote}</p>
          <p>
            <strong> {quote.author}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
