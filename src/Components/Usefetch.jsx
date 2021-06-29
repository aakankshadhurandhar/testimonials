
import { useEffect, useState } from "react";
export default function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
      const getquote = async () => {
        const temp = await fetch(url).then((res) => res.json());
        setData(temp);
      };
  
      getquote();
    }, [url]);
    return { data };
}
