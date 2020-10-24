# Best Practices

## Styles & Coding

- HTML, CSS and Javascript follow in general the Google Style Guide conventions (https://github.com/google/styleguide);
- Custom CSS follows the BEM convention (http://getbem.com/);

Please be sure to check and follow them before attempt any modification to the sources, in order to preserve the general integrity of the project patterns.
Third-party linter plugins like ESLint, Beautify, Prettier or any other similar resource are welcome (configuration files of the mentioned ones are already present).


## Assets

### Common Guidelines

- For assets inclusion location, specifications or their variations, please refeer to __TODO__ comments inside the sources;


### List of common assets

- Paths:
    * __/\_\_tests\_\_/__: Contains all the shared unit tests;
    * __/.next/__: Contains all the shared server-rendered build files;
    * __/backend/__: Contains all the shared back-end scripts (__development__/__production__ version);
    * __/components/__: Contains all the shared component section snippets;
    * __/\_\_tests\_\_/\_\_snapshots\_\___: Contains all the shared snapshot unit tests;
    * __/config/__: Contains all the deploy manager configuration settings (__development__/__production__ version);
    * __/config/deploy__: Contains all the deploy manager configuration recipes (__development__/__production__ version);
    * __/js/fontend/dist/__: Contains all the shared scripts (__production__ version);
    * __/js/frontend/\<section_name\>/__: Contains all the section scripts (__development__ version);
    * __/lib/__: Contains all the deploy manager utility recipes;
    * __/out/__: Contains all the shared static build files;
    * __/pages/__: Contains all the shared app component scripts;
    * __/sass/__: Contains all the shared preprocessed styles;
    * __/sass/lib/__: Contains all the shared third-party preprocessed styles;
    * __/sass/\<section_name\>/__: Contains all the section preprocessed styles;
    * __/scripts/__: Contains all the shared NodeJS scripts;
    * __/static/__: Contains all the shared static assets;
    * __/static/img/__: Contains all the iconographic assets;
    * __/static/js/__: Contains all the shared scripts (__development__ version);
    * __/static/js/lib/__: Contains all the shared third-party scripts;

- Sources:
    * __/\_\_test\_\_/dom.test.js__: DOM manipulation testing assertion definitions
    * __/backend/init-apollo.js__: Back-End client JavaScript module;
    * __/backend/with-apollo-client.js__: Back-End client helper JavaScript module;
    * __/components/<section-name\>.js__: Section module
        - Includes:
            - __/sass/<section-name\>.scss__: Section style preprocessor import;
            - __\<function-name\>__: Common proprietary and third-party modules import;
    * __/pages/_app.js__: App HOC JavaScript module;
    * __/pages/_document.js__: App document JavaScript module
        - Includes:
            - All the common third-party library (style/script) preloads
                - jQuery - CDN;
            - All the common third-party library (script) imports
                - jQuery - CDN;
    * __/pages/index.js__: App index JavaScript module;
    * __/scripts/dateFormat.js__: Sitemap generator ISO date format converter;
    * __/scripts/postExport.js__: Sitemap updater;
    * __/scripts/sitemap.js__: Sitemap generator;
    * __/static/js/install.js__: Progressive Web App local installation settings;
    * __/static/js/refresh.js__: Progressive Web App refresh UX;
    * __/static/service-worker.js__: Progressive Web App service worker configuration;
    * __/static/manifest.json__: _Webpack_ manifest file;


## Repository

- .gitignore (Production)
    * __/\_\_tests\_\_/:__ Unit testing files (_JavaScript_);
    * __/components/:__ Components section snippet files (_JavaScript_);
    * __/config/:__ Deploy manager configuration files (_Capistrano_);
	* __/lib/:__ Deploy manager utility recipes (_Capistrano_);
    * __/log/:__ Various operational registries;
    * __/node_modules/:__ Full-Stack Front-End dependencies (_NodeJS_);
    * __/pages/:__ App component files (_JavaScript_);
    * __/sass/:__ Front-End development files (_SASS_);
    * __/scripts/:__ Production build utility files (_NodeJS_);
    * __/static/:__ Static asset files;
    * __!/.gitignore:__ Repository configuration file;
    * __!/.htaccess:__ Host configuration file;
    * __!/.next:__ Server-rendered build files;
    * __/.*:__ Various system and configuration files;
    * __/*.json:__ Full-Stack Front-End various configuration files;
    * __/*.php:__ Back-End various script files;
    * __/babel.config.js:__ ES6 compiler configuration files (_JavaScript_);
    * __/Capfile:__ Deploy Manager configuration file (_Capistrano_);
    * __/config.rb:__ Front-End Framework configuration files (_Compass_);
    * __/Gemfile:__  Deploy Manager installation file (_Capistrano_);
    * __/Gemfile.lock:__ Deploy Manager dependencies file (_Capistrano_);
	* __/gulpfile.js:__ Front-End task-runner configuration files (_Gulp_);
    * __/jest.*.js:__ Unit testing plugin configuration files (_Jest_);
    * __/next.config.js:__ Front-End Framework configuration files (_Next_);
    * __/postcss.config.js:__ Module plugin bundler configuration files (_Webpack_);
    * __/robots.txt:__ Robots configuration file;
    * __/server.js:__ Full-Stack Front-End configuration file (_NodeJS_);
    * __.DS_Store__: OS filesystem indexing file (_Mac OS X_);


I.e.

```
    # Repository - Configuration
    /__tests__/
    /components/
    /config/
    /lib/
    /log/
    /node_modules/
    /pages/
    /sass/
    /scripts/
    /static/
    !/.gitignore
    !/.htaccess
    !/.next
    /.*
    /*.json
    /*.php
    /babel.config.js
    /Capfile
    /config.rb
    /Gemfile
    /Gemfile.lock
    /gulpfile.js
    /jest.*.js
    /next.config.js
    /postcss.config.js
    /robots.txt
    /server.js
    .DS_Store
```


### Branches

There are three branches, defined as:

- __develop__ (Development);
- __staging__ (Beta);
- __master__ (Production - _Default_);

Contributions implement the GitFlow framework (https://tinyurl.com/zt4vys8).
Please read about its specifications before commit on any branch.

### Commits

Official Udacity Git commit message style guide is used. Please consult the docs (http://udacity.github.io/git-styleguide/) for details.



### Merges

- __staging__: merging from __develop__;
- __master__: merging from __staging__;


### Releases

The releasing process follows the SemVer specification (https://semver.org/).
Please read about its guidelines before draft any release.


## Host

### Essential files^!

- __.ftpquota__
- __revisions.log__

^! __Not delete__
