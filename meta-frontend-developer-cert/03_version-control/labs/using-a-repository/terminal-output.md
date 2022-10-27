``` sh
coder@b8080537d794:~/project$ gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Paste an authentication token
Tip: you can generate a Personal Access Token here https://github.com/settings/tokens
The minimum required scopes are 'repo', 'read:org', 'workflow'.
? Paste your authentication token: ****************************************
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as Jarzard
coder@b8080537d794:~/project$ gh repo clone Jarzard/coursera
Cloning into 'coursera'...
remote: Enumerating objects: 4300, done.
remote: Counting objects: 100% (4300/4300), done.
remote: Compressing objects: 100% (3098/3098), done.
remote: Total 4300 (delta 1016), reused 4266 (delta 1002), pack-reused 0
Receiving objects: 100% (4300/4300), 4.88 MiB | 10.35 MiB/s, done.
Resolving deltas: 100% (1016/1016), done.
Updating files: 100% (3837/3837), done.
coder@b8080537d794:~/project$ git status
fatal: not a git repository (or any parent up to mount point /home/coder)
Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
coder@b8080537d794:~/project$ cd coursera
coder@b8080537d794:~/project/coursera$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
coder@b8080537d794:~/project/coursera$ ls
meta-frontend-developer-cert  README.md
coder@b8080537d794:~/project/coursera$ cd meta-frontend-developer-cert/
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert$ ls
01_course_introduction-to-the-professional-certificate  02_course_programming-with-javascript  03_version-control  README.md
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert$ cd 03_version-control/
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control$ mkdir labs
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control$ ls
labs  README.md
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control$ cd labs
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ mkdir using-a-repository
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ./

nothing added to commit but untracked files present (use "git add" to track)
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git add ./
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   using-a-repository/result.txt

coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git commit -m "Successful exercise"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'coder@b8080537d794.(none)')
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git config --global user.email "abenojarson@gmail.com"
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git config --global user.name "Jarson - Coursera"
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git commit -m "Successful exercise"
[main 9039c4f] Successful exercise
 1 file changed, 1 insertion(+)
 create mode 100755 meta-frontend-developer-cert/03_version-control/labs/using-a-repository/result.txt
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ git push
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 32 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (7/7), 516 bytes | 73.00 KiB/s, done.
Total 7 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/Jarzard/coursera.git
   8c9a2c3..9039c4f  main -> main
coder@b8080537d794:~/project/coursera/meta-frontend-developer-cert/03_version-control/labs$ 
```