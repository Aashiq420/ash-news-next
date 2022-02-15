import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();

    await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&pageSize=10`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        }})
          .then(res => res.json())
          .then((json) => {
            setResults(json)
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
        <div>{results && <h2 style={{textAlign: 'center'}}>Showing search results for '{query}'</h2>}
        { results ?
          results.articles.map((article) => (
          <div style={{ display: 'flex', maxWidth: '1024px'}} className={styles.container}>
            <div>
              <img src={article.urlToImage} alt={article.source.name} 
                style={{ 
                    maxWidth: '15vw', 
                    borderRadius: '5px'
                    }}>
              </img>
            </div>
            <div style={{ margin: '0 5%' }}>
              <h3>{ article.title }</h3>
              <h4>Author: { article.author }</h4>
              <a 
                href={article.url} 
                target='_blank'
                className={styles.link}>
                  <p>Click here to read full article on {article.source.name}</p>
              </a>
            </div>
          </div>
          )) : <p style={{textAlign: 'center'}}>Your search results will display here</p>}
        </div>
    </>
  )
}
