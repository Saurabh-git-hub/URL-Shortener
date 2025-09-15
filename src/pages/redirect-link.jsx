// import {storeClicks} from "@/db/apiClicks";
// import {getLongUrl} from "@/db/apiUrls";
// import useFetch from "@/hooks/use-fetch";
// import {useEffect} from "react";
// import {useParams} from "react-router-dom";
// import {BarLoader} from "react-spinners";

// const RedirectLink = () => {
//   const {id} = useParams();

//   const {loading, data, fn} = useFetch(getLongUrl, id);

//   const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
//     id: data?.id,
//     originalUrl: data?.original_url,
//   });

//   useEffect(() => {
//     fn();
//   }, []);

//   useEffect(() => {
//     if (!loading && data) {
//       fnStats();
      
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [loading]);

//   if (loading || loadingStats) {
//     return (
//       <>
//         <BarLoader width={"100%"} color="#36d7b7" />
//         <br />
//         Redirecting...
//       </>
//     );
//   }

//   return null;
// };

// export default RedirectLink;


// my code 
import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const { id } = useParams();
  const { loading, data, fn, error } = useFetch(getLongUrl, id);
  const { fn: fnStats } = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  const [redirecting, setRedirecting] = useState(false);

  // Fetch the long URL when component mounts
  useEffect(() => {
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When data is loaded, store stats and redirect
  useEffect(() => {
    if (!loading && data?.original_url) {
      fnStats(); // store click
      setRedirecting(true);

      // Small delay so user sees loader before redirect
      setTimeout(() => {
        window.location.href = data.original_url;
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);

  if (loading || redirecting) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <BarLoader width={"100%"} color="#36d7b7" />
        <p>Redirecting...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>⚠️ Sorry, this short link is invalid or has expired.</p>
      </div>
    );
  }

  return null;
};

export default RedirectLink;
