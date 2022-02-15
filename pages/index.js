import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState('');

  function handleSearch(e) {
    e.preventDefault();

    fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&pageSize=10`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        }})
          .then(res => res.json())
          .then((json) => {
            setArticles(json)
            console.log(typeof(articles))
          });    
  }

  return (
    <>
      <Head>
        <title>Ash News | Home</title>
        <meta name="keywords" content="news"/>
      </Head>
      <div className={styles.content}>
        <h1>Welcome to Ash News!</h1>
        <p>Search for news below or browse the categories</p>
        <form className={styles.search} onSubmit={handleSearch}>
          <input 
            required
            name="query" 
            type="search" 
            placeholder='Search for news'
            onChange={(e) => setQuery(e.target.value)}
            />
          <button type="submit">Search</button>
        </form>
      </div>
      <br/>
        <div>
        </div>
    </>
  )
}
