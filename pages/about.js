import React from "react";
import useSWR from "swr";
import Link from 'next/link';
import styles from "./Login.module.css"
import Image from "next/image";
import sunshine from "./sun.jpg"


export default function About({data}) { 


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



     <p key={data.id}>{data.title}</p>

    </div>
  );
 
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

