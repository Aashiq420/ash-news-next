import Head from 'next/head';
import styles from '../../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=sport&country=gb&pageSize=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      }})
  const data = await res.json();

  return {
    props: { sport: data }
  }
}

const Sport = ({ sport }) => {
  return (
    <div>
        <Head>
            <title>Ash News | Sport</title>
        </Head>
      <h1  style={{textAlign: 'center'}}>Top Sport Headlines</h1>
      <br />
      {  sport.articles.map(article => (
          <div style={{ display: 'flex', maxWidth: '960px'}} className={styles.container}>
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
                className={styles.link}
                >
                    <p>Click here to read full article on {article.source.name}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Sport;