# README

## Setup
Download [*Node.js*](https://nodejs.org/)  

Clone the project to your local machine via:  
HTTPS `https://github.com/core-empire/overwatch.git`  
SSH `git@github.com:core-empire/overwatch.git`  

Example `git clone https://github.com/core-empire/overwatch.git`  

## Workflow
Go to your local repository directory via command line and run
- `npm install` *this will install the node module dependencies for the project (this only needs to be run once)*
- `grunt watch` *this will watch the project directory for changes (must be running any time you are working)*
- `jekyll serve` *this by default will point to 127.0.0.1:4000 (must be running any time you are working)*

*When doing development, you should always be running `grunt watch` and `jekyll serve`*  

--

If you are going to publish something live, set `dev_environment` to `false` in `_config.yml`.  
If you are working locally, be sure `dev_environment` is set to `true` in `_config.yml`.  


## Policy
Please do all development of the site on the `development` branch.  
If you want to merge local changes on your development branch with the remote `master` branch, do the following:  
- `git add ./` (Adds any untracked files to the working tree)
- `git commit -am "My changes I want to go live"` (Commit your changes to the dev branch)
- `git push origin development` (Pushes your local changes to the remote branch)

After that, go to our GitHub repo and make a pull request to merge `development` into `master`.  

## Deployment
If you have changes that need to hit the live site (those that are forward-facing), you'll need to do the following two steps.

- Push and merge your changes with the remote `master` branch (see *Policy*)
- To push forward-facing changes, use `grunt deploy`


### Warning
THE CODEBASE SHOULD NEVER ARRIVE TO THE `gh-pages` BRANCH. USE `grunt deploy` if you want to push your changes live.  