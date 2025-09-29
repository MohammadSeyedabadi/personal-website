export default async function Stars({ projectsList, locale }) {
 
  const repos = await getRepos();
  return (
    <>
      {projectsList.map((project) => {
         console.log(`https://github.com/MohammadSeyedabadi/${project.githubName}/stargazers`)
        return (
          repos?.find((repo) => repo.name === project.githubName) && (
            <a
              key={project.slug}
              href={`https://github.com/MohammadSeyedabadi/${project.githubName}/stargazers`}
              target="_blank"
              className="hover:underline active:scale-75 text-indigo-500 dark:text-indigo-300"
            >
              {Number(
                repos.find((repo) => repo.name === project.githubName)
                  .stargazers_count
              ).toLocaleString(locale === "en" ? "es-US" : "fa-IR")}
            </a>
          )
        );
      })}
    </>
  );
}

export async function getRepos() {
  try {
    const repos = await fetch(
      "https://api.github.com/users/MohammadSeyedabadi/repos?per_page=100"
    );

    return repos.json();
  } catch (error) {
    console.error(
      `Failed To Fetch Repos In /projects/stars.js. Error Message : ${error}`
    );
    // works when no internet
    return null;
  }
}
