const fetchRepos = async () => {
    const response = await fetch('https://api.github.com/users/marckraw/repos', {
        next: {
            revalidate: 60 // wait that amount of second until request again for fresh data - if working with data that is changing frequently, you should set this to something small, if not than dont set it at all
        }
    })

    await new Promise(resolve => setTimeout(resolve, 3000))

    const repos = await response.json()
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos()

    return <div>{repos[0]?.name}</div>
}

export default ReposPage