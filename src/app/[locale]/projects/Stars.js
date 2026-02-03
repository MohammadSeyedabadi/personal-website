import StarIcon from "@/assets/StarIcon";

export default async function Stars({ githubName, locale }) {
  const repos = await getRepos();
  const repo = repos?.find((r) => r.name === githubName);
  if (!repo) return null;
  return (
    <a
      href={`https://github.com/MohammadSeyedabadi/${githubName}/stargazers`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:underline active:scale-75 text-indigo-500 dark:text-indigo-300"
    >
      {Number(repo.stargazers_count).toLocaleString(
        locale === "en" ? "en-US" : "fa-IR"
      )}
      <StarIcon />
    </a>
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
