# README

## Environment
We're using [Jekyll](https://jekyllrb.com/), a Ruby-driven static site generator to power the website. Our only real dependency to get started with development is Ruby itself, which comes preinstalled with Mac, however, Windows developers will need to go through the [process of installing it](https://rubyinstaller.org/).

## Gems
We're using a few Ruby gems to give the site some fancy features. When you're first setting up your environment, you'll need to run:

`cd /path/to/repo`
`gem install bundler`
`bundle install`

Now our gem dependencies should be installed.

## Server
Jekyll serves our site, which is neat. Run:
`jekyll serve --watch`

And you should be able to visit the local site at `http://localhost:4000`. Livereload is enabled, so any changes you make locally should be represented in the browser without refresh-- and obviously Jekyll is watching your working directory for changes.

## Deployment
This could probably be a bit more streamlined but when you're ready for changes to go live, do:

`git add ./` - if you've added any new files
`git commit -m 'some message regarding my work'`
`JEKYLL_ENV=production bundle exec jekyll build`
`git commit -m 'prod build'` - I prefer having a build commit
`git push origin source` - Update our source branch with the latest
`git subtree push --prefix _site origin gh-pages` - This deploys changes to our live site
