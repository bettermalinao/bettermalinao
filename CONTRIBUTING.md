# Contributing
Contributions are welcome. Development follows a fork-based workflow to keep changes organized and reviewed before they are merged into the main repository.

## Workflow 
1. Forked this repository:  
[https://github.com/bettermalinao/bettermalinao](https://github.com/bettermalinao/bettermalinao)

2. Clone your fork locally:  
```
git clone https://github.com/<your-username>/bettermalinao.git
```  
_Replace <your_username> with your actual github username_

3. Navigate to the project:  
```
cd bettermalinao
```

4. Add the original repository as the upstream:  
```
git remote add upstream https://github.com/bettermalinao/bettermalinao
```  

5. Sync your local repository before starting new work:  
```
git fetch upstream
git switch main
git pull --ff-only upstream main
```
6. Create a new branch for your contribution (changes/fixes):
```
git switch -c feature/feature-name
```
7. Make your changes and commit them:
```bash
git add . # or 'git add <file_name>' replace the <file_name> with the actual relative file path
git commit -m "feat: add new feature"
```

8. Push your branch and changes to your fork:
```
git push -u origin feature/feature-name
```

9. Open a Pull Request targeting the main branch of the original BetterMalinao repository.

## Branch Naming
- feature/* - new features (replace * with a more desriptive name for the feature)
- fix/* - bug fixes
- docs/* - documentation changes
- refactor/* - code improvements with changing functionality

## Pull Requests
- Keep changes focuses on a single feature or issue
- Use clear and descripting commit message
- Ensure the project builds sucessfully before submitting
- Provide a brief description of what changed and why
- Link related issues when applicable
- Provide screenshots when applicable  

**Note**: All PRs must target the `main` branch and be reviewed before merging