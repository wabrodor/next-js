import React from "react";
import useSWR from "swr";
import Link from 'next/link';
import styles from "./Login.module.css"
import Image from "next/image";
import sunshine from "./sun.jpg"
export default function about() { 


  return (
    <div>
      <Link href="/">
        <a className={styles.hello}> home </a>
      </Link>
      <Image
        src={sunshine}
        alt="Picture of the author"
        width={500}
        height={500}
      />
   
      <p className={styles.hello}>hi my brother</p>
      {/* {data.map((item) => {
        return <p key={item.id}>{item.user}</p>;
      })} */}
    </div>
  );
 
}


// export const getServerSideProps = async () => {
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const { data, error } = useSWR("/api/user", fetcher);

//   if (error) return <div>Failed to load users</div>;
//   if (!data) return <div>Loading...</div>;

//   return {
//     props: {
//       user: user,
//     },
//   };
// };

