Download Node.js & NPM
Go to your local repository directory via command line and run
`npm install` - this will install the node module dependencies for the project (this only needs to be run once)
`grunt watch` - this will watch the project directory for changes (must be running any time you are working)
`jekyll serve` - this by default will point to 127.0.0.1:4000 (must be running any time you are working)

--

If you are going to publish something live, set `dev_environment` to `false` in `_config.yml`.
If you are working locally, be sure `dev_environment` is set to `true` in `_config.yml`.