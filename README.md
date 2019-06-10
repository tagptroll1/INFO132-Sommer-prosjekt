# INFO132-sommer-prosjekt

## How to git

## 3 Steps to pushing your changes
Vanligste måten å få noe fra fil til lokal git storage og så til github.
### 1. Staging files
`git add .` - Dette stager alle filene i mappen rekursivt.\
*Dette kan også gjøres i VS Code, eller pycharm sine menyer, men det dekker jeg ikke.*  

### 2. Commiting staged changes
`git commit -m "dette er commit meldingen"` - Dette commiter, som at det lagres lokalt på din maskin som en forandring.\
*Jeg ville ungått å gjøre dette i VS Code og pycharm ettersom det er litt funky av og til*

### 3. Pushing to Repo
`git push origin <branchName>` - Origin er streamet mot repoet, bytt ut <branchName> med navnet på branchen du jobber på.\
`git push origin master` - vil for eksempel pushe til master, men prøv å lage Pull requests istedet..

## Making a new branch
Dette er veien å gå for hver feature man vil lage, og seinere merge det inn i master med en pull request.
### Make sure master is up to do
`git checkout master` - bytt til master branchen\
`git fetch -p origin` - pull det nyeste fra repoet, og fjerner døde streams.\
`git merge origin/master` - merge det inn i den branchen du er i (master).

### Branch off master
`git checkout -b name-of-new-branch` - Dette brancher ut fra branchen du er på (master om du gjorde forrige steg).

## Updating branch from master
Pass på at Master er up to date med å følge stegene over
`git checkout name-of-feature-branch` - bytt til branchen du vil oppdater.\
`git merge master` - Merger master inn i ditt repo, kan gi merge konflikter men er ofte lett å fikse.\
`git push origin name-of-feature-branch` - pass på at mergen er live på github og.

### Update branch from github
Vær på branchen du vil oppdatere fra github\
`git pull origin name-of-feature-branch` - Puller fra github og oppdatere din lokale branch.