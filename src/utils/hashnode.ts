import { cache } from "react"

const graphQLQuery = `
    query {
        me {
            posts (pageSize: 10, page: 1) {
                nodes {
                    id
                    title
                    subtitle
                    url
                    coverImage {
                        url
                    }
                    readTimeInMinutes
                }
            }
        }
    }
`

export const getHashnodeArticles = cache(async () => {
    const response = await fetch("https://gql.hashnode.com", {
        body: JSON.stringify({
            query: graphQLQuery
        }),
        headers: {
            "Authorization": process.env.HASHNODE_ACCESS_TOKEN!,
            "Content-Type": "application/json"
        },
        method: "POST",
        next: {
            tags: ["articles"]
        }
    })
    const result = await response.json()
    const articles = result.data?.me.posts.nodes as {
        id: string,
        subtitle: string,
        url: string,
        readTimeInMinutes: number,
        coverImage: { url: string },
        title: string,
    }[]
    return articles ?? []
})