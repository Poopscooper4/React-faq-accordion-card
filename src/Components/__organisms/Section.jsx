import React, { useEffect, useState } from "react";
import axios from "axios";
import Faqbox from "../__moleculs/Faqbox";
import compimg from "../../img/mention_isometric (1).png";
import compimg2 from "../../img/mention2.png";

const Section = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/quotes?limit=5"
        );
        setQuotes(response.data.quotes);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <section
      className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-b
     from-[#B068E9] to-[#6463E7] p-[20px]"
    >
      <div className="flex items-center justify-center flex-col relative pt-[100px]">
          <img className="md:hidden absolute top-0" src={compimg} alt="" />
      <div className="bg-white rounded-[23px] md:p-0 pt-[100px]  flex-raw flex justify-center md:justify-between items-center ">
        <img className="md:block hidden" src={compimg2} alt="" />
        <div className="flex md:items-start justify-center items-center">
        </div>
        <div className="md:p-[50px_60px] w-[70%]">
          <h2 className="text-2xl font-bold  mb-6 text-center md:text-start">FAQ</h2>
          {error && <p className="text-red-500">{error}</p>}
          {quotes.map((quote, index) => (
            <Faqbox key={index} question={quote.quote} answer={quote.author} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Section;
