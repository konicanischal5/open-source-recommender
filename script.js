async function getRepos() {
  let skill = document.getElementById("skill").value;

  let res = await fetch(`https://api.github.com/search/repositories?q=${skill}+good-first-issues&sort=stars&order=desc`);
  let data = await res.json();

  let output = "";

  data.items.slice(0, 5).forEach(repo => {
    output += `
      <div class="repo">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <p>Good for beginners with ${skill} skills</p>
        <a href="${repo.html_url}" target="_blank">View Repo</a>
      </div>
    `;
  });

  document.getElementById("repos").innerHTML = output;
}