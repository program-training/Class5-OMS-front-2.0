import { useState } from "react";

const useTerm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return { searchTerm, setSearchTerm };
};

export default useTerm;
