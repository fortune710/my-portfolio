import { useCallback, useEffect, useMemo, useState } from "react"
import { Article } from "./article";
import styles from './article.module.scss';
import { SectionTitle } from "../Title/title";


export const ArticlesSection = () => {
    const query = `
    query GetUserArticles($page: Int!) {
        user(username: "fortunealebiosu") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
    `
    const variables = { page: 0 }
    const fetchData = async () => {

        try {
            const data = await fetch("https://api.hashnode.com", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query,
                    variables
                })
            })
            const res = await data.json()
            setArticles(res.data.user.publication.posts)
        } catch (err) {
            console.error(err)
        }
    }

    const memoizedFetch = useCallback(() => fetchData(), [fetchData])

    const [articles, setArticles] = useState(undefined)

    useEffect(() => {
        memoizedFetch()
    }, [memoizedFetch])

    return(
        <section id="articles" className={styles.section}>
            <SectionTitle name="I write sometimes"/>
            <p>
                I talk about web dev a lot and my content is geared 
                towards beginner developers.
            </p>

            <div className={styles.articleContainer}>
                {
                    !articles ? <h5>Loading Articles</h5>
                    : articles.map((article) => (
                        <Article
                            key={article}
                            title={article.title}
                            imageUrl={article.coverImage}
                        />
                    ))
                }
            </div>

            <a className={styles.linkToBlog} href="https://fortunealebiosu.hashnode.dev">
                <button>
                    Check out my blog!
                </button>
            </a>
        </section>
    )
}