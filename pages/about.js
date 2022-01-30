
import React from 'react';
import useSwr from "swr";
import Link from 'next/link';
import styles from "./Login.module.css"

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function about() {
    const { data, error } = useSwr("/api/user", fetcher);

    if (error) return <div>Failed to load users</div>;
    if (!data) return <div>Loading...</div>

  return (
    <div>
      <Link href="/">
        <a className={styles.hello}> home </a>
      </Link>
   
      <p className={styles.hello}>hi my brother</p>
      {data.map( item =>{
          return(
              <p>{item.user}</p>
          )
      })}
    </div>
  );
 
}
