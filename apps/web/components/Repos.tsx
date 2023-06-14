
const fetchRepos = async () => {
    const response = await fetch('http://localhost:3000/api/repos')
    const repos = await response.json()
    return repos
}

const Repos = async () => {
    const repos = await fetchRepos()
    console.log(repos)
    return (
        <div>
            <h2>Repos</h2>
            {
                repos.map(repo => {
                    return (
                        <div key={repo.id}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export {Repos}