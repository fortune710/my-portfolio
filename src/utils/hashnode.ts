const graphQLQuery = `
    query {
        me {
            posts (pageSize: 6, page: 1) {
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

export const getHashnodeArticles = async () => {
    const response = await fetch("https://gql.hashnode.com", {
        body: JSON.stringify({
            query: graphQLQuery
        }),
        headers: {
            "Authorization": "75002f18-80eb-4ec4-872e-8baabadcbdc1",
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
}