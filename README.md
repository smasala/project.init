## Project Init

Clone this project to have a working project environment for your latest JavaScript Web Application.

## Getting Started

### Installation

	npm install
	
Make sure grunt is installed globally

	npm install grunt-cli -g

Run the following command to start the file watcher

    grunt dev
    
### Modules

`grunt dev` mode activates the following modules under a  file watcher:

* Browsify with Babelify (Babel)
* JSCS
* JSHint
* SASS
* Http-server

`grunt prod` mode fires the following modules:

* Version bump
* Browsify with Babelify (Babel)
* JSCS
* JSHint
* SASS

`npm test` runs the jasmine test specs