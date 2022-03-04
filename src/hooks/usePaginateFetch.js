import { useState, useEffect } from "react";
import axios from "axios";

export default function usePaginateFetch(query, page, limit) {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [results, setResults] = useState([]);
   const [hasNext, setHasNext] = useState(false);


   // useEffect(() => {
   //    setResults([]);
   // }, [query]);

   useEffect(() => {
      setLoading(true);
      setError(false);

      let cancel;

      axios({
         method: "GET",
         url: `https://dooda-api.herokuapp.com/mocks`,
         params: { q: query, page: page, limit: limit },
         // cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
         .then((res) => {
            setResults((prevResults) => {
               return [...new Set([...prevResults, ...res.data.docs])]
            });
            setHasNext(res.data.next);
            setLoading(false);
         })
         .catch((e) => {
            // if (axios.isCancel(e)) return;
            setLoading(false);
            setError(true);
         });
      // return () => {
      //    cancel();
      // };
   }, [query, page, limit]);

   return { loading, error, results, hasNext };
}
