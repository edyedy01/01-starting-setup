SOURCE CODE
	beginning of course
		https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components
	end of module 3 lecturer's code
		https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components
	end of module 4
		https://github.com/academind/react-complete-guide-code/tree/04-react-state-events

UDEMY REACT COURSE
	VERY REACTIVE LIKE A MOBILE PHONE APP
	RUNS ON JAVASCRIPT
	DISPLAYS DOM
	REACT MANIPULATES DOM WITH NEW HTML WITHOUT RELOADING
	REACT IS A JAVA SCRIPT LIBRARY
	What is React.js - a client side JavaScript library
	React runs client side

REACT
	1/3 - 2022-06-09
	SPA - single page application 
	React.js - lean and focused component library.  Features like, eg:  routing, are provided by third party community packages.
	Angular - complete component based ui framework, overkill for smaller applications.
	Vue.js - complete component based ui framework, less features than angular, more features than react.

	COURSE OVERVIEW
		BASICS AND FUNDATION
			compnents U bulding UIs
			workign with events U data props and state
			styling react apps & componnets
			intruciton to react hooks
		ADANCED CONCEPTS
			side effects, refs and more react hooks
			react's context api & redux
			forms, http requests and custom hooks
			routing, deployment, nextJS & more
		SUMMARIES AND REFERESHERS
			javascript referesher
			reactjs summary
	VISUAL STUDIO
		EXTENDIONS
			prettier - for code formatting
				file > properties > settings > formatter > prettier
			material icon theme - for folder icons, 100% optional
				
	JAVASCRIPT - NEXT GENERATION
		use jsbin.com to test javascript, enable JavaScript and Console, Ctrl + ENTER to execute
		var (old, use let)
		let (the new var)
		const (for constants)
			var x = 'X';
			console.log(x);
			x = 'z';
			console.log(x);
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			let x = 'X';
			console.log(x);
			x = 'z';
			console.log(x);
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			const x = 'X';
			console.log(x);
			x = 'z';
			console.log(x);
			"TypeError: Assignment to constant variable.
			    at muzuvikeqa.js:3:3
			    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
			    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		arrow funcitons
			type 1
				function myFnc() {}
			type 2
				const myFnc = () => {}
			whats the difference?
				arrow function (type 2) keeps context, type 1 does not
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			function printMyName(name) {
			  console.log(name);
			}
			printMyName('Mr T');
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			const printMyName = (name) => {
			  console.log(name);
			}
			printMyName('Mr T');
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx - can ommit parenthesis if function arguments are exactley 1 in amount
			const printMyName = name => {
			  console.log(name);
			}
			printMyName('Mr T');
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx - cannot ommit parenthesis if no arguments are defined in the function signature
			const printMyName = () => {
			  console.log('Mr T');
			}
			printMyName();
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx - cannot ommit parentesis upon more than 1 argument in the function signature
			const printMyName = (name, age) => {
			  console.log(name, age);
			}
			printMyName('Mr T', 45);
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx - single line short hand
			const performMultiplication = number => number * 2;
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx - single line 
			const performMultiplication = number => {
			   return number * 2;
			}
			console.log(performMultiplication(2));
		exports, imports and modules
			person.js
			const person = {
				name: 'Mr T'
			}
			export default person
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			utility.js
			export const clean = () => {
				//DO SOMETHING
			}
			export const baseData = 10;
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			app.js
			import person from './person.js'
			import prs from './person.js'
			import {baseData} from './utility.js' 			<<named import
			import {clean} from './utility.js' 				<<named import
			import {clean as cln} from './utility.js' 		<<named import:  use 'as' keyboard to define the name as you want it
			import {* as bundle} from './utility.js' 		<<named import:  import all
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		classes
			class Person{
				let name = 'Mr T'; 							<<property
				const myFunction = () = { 					<<method
					//DO SOMETHING
				}
			}
			const myPerson = new Persion(); 				<<constructor
			myPerson.myFunction();
			console.log(myPerson.name);
			class Person extends Master 					<<inheritance  

			class Person {
			  constructor() {
			    this.name = 'Mr T';
			  }
			  printName() { console.log(this.name) };
			}
			const myPerson = new Person();
			myPerson.printName();
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx inheritance
			class Master {
			  constructor() {
			    this.gender = 'male';
			  }
			  printGender() {console.log(this.gender);}
			}
			class Person extends Master {
			  constructor() {
			    super();
			    this.name = 'Mr T';
			  }
			  printName() {console.log(this.name);}
			}
			const myPerson = new Person();
			myPerson.printName();
			myPerson.printGender();
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx classes, properties & methods alternative syntax
			class Master {
			  gender = 'male';
			  printGender = () => {console.log(this.gender);}
			}
			class Person extends Master {
			  name = 'Mr T';
			  printName = () => {console.log(this.name);}
			}
			const myPerson = new Person();
			myPerson.printName();
			myPerson.printGender();
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx spread & rest operators
			'...'
			SPREAD 	- used to split up array elements or object proeprties
					const newArray = [...oldArray, 1, 2];
					const newObject = {...oldObject, new Prop:5};
			REST 	- used to merge a list of function arguments into an array
					function sortArgs(...args) {reurn args.sort();}
				example - spread
					const numberArray1 = [1, 2, 3];
					const numberArray2 = [...numberArray1, 4, 5, 6];
					console.log(numberArray1);
					console.log(numberArray2);
				
					const person1 = {
					  name: 'Mr T'
					}
					const person2 = {
					  ...person1, 
					  age: 45
					}
					console.log(person1);
					console.log(person2);				
				example - rest
					const filter = (...args) => {
					  return args.filter(el => el === 1);
					}
					console.log(filter(1, 2, 3, 4, 5, 1, 1));
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx DESCTRUCTURING
			array destructuring
				const numbers = [1, 2, 3];
				[n1, n2] = numbers;
				console.log(n1, n2);
				[nx1, , nx3] = numbers;
				console.log(nx1, nx3);
			object destructuring
				{name} = {name: 'Mr T', age: 28};
				console.log(name);
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx references and primitive types
			numbers, strings and booleans are primitive types
			example
				const n1 = 1;
				const n2 = n1;
				console.log(n1);
				console.log(n2);
				n2 will be equal to a copy of n1
			objects and arrays are reference types
				example
				const p1 = {
				  name: 'Mr T'
				}
				const p2 = p1;
				console.log(p1);
				console.log(p2);
				p1 will reference p2
			copy objects and arrays by using the spread '...' operator
				const p1 = {
				  name: 'Mr T'
				}
				const p2 = {
				  ...p1
				}
				console.log(p1);
				console.log(p2);
			xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx array functions
			map()
				const numerics = [1, 2, 3];
				const doubledNumerics = numerics.map((number) => {
				  return number * 2;
				});
				console.log(numerics);
				console.log(doubledNumerics);
	COMPONENT DRIVEN INTERFACES
		React Core Syntax and JSX
		working with components
		workign with data
		REACT is a javascript library for building UI interfaces
		HTML, CSS and JavaScript
		React simplifies this
		Why use components?
			reusability
			seperation of concerns
		How is a component built?
			UI's are HTML, CSS and JavaScript
			React is a combination of all the above
			React allows you to build re-usable components with HTML and JavaScript
			Uses the Declarative approach:  define the desired target state/s and let React figure out the actual JavaScirpt DOM instrucitons, ie:  build your own customised HTMl elements.
		A component in React is a JavaScript function.
	ANATOMY OF A REACT PROJECT 
		package.json - dependencies (like the pom.xml of a java project)
		src - holds all the customised source code
		node_modules - contains all node specific dependencies, anything and everything in this folder should stay untouched by the developer
		index.js - entry point of the application, glues the index.css and App.js files together
		index.html - the only html file in the entire project, gets loaded and viewed in the browser
	CREATE A NEW REACT APPLICATION
	    run
	        npx create-react-appp <app_name>
	        this command will automatically download all dependencies
	REACT SYNTAX RULES
		1 - L ower case markup is html and uppercase is React.  The React engine uses this convention to detect custom React componnets.
		2 - any given 'return' statemnt of a react function must only, at any given time, return one root HTML tag.
		3 - the first line of a .js file cannot contain the keyword 'function', rather leave a blank line as the first line even though you have no imports.
		4 - "import React from 'react';" is old react syntax, no longer necessary
		5 - all events in reactjs elements start with the charcaters 'on', every HTML element event is mapped in react in this way.
		6 - functions referenced in event expressions must not contain the parenthesis '()', this will cause them to execute at run time as opposed to when the event is generated
		7 - it is good practice to name your event handling functions ending with the word 'Handler', eg:  onClickHandler.
		8 - functions initialised as 'function doSomething()' or 'const doSomething = () => ' do not differ in any way under the hood.  Preference is given to the arrow annotation for no technically valid reason.
		9 - State handling:  
			import React, {useState} from 'react';
			Use 'useState()' only inside reactjs functions, must not be called from nested functions, eg:  const [title, setTitle] = useState(props.title);
			setTitle will, when called inside of the event handling fuction, re-render the component in which it is called.
			setTitle will, when called inside of the event handling fuction, not change the value of the field in question but merely schedule it for an update.
			State is being used, handled and separated on a per-component basis.
			The 'useState' function will not be re-evaluated upon a component refresh, it will recall the latest value that it has.
			When calling an event handler in React and when one is relying on the previous state, then rather handle this with an anonymous function, eg:
				const titleHandler = (event) => {
					//not this
					setTitle(event.target.value);
					//but this
					setTilte((previousStae) => {});
					//'previousState' will have the last value of the field in question before the update
					//remember that React will 'schedule' updates so one may not immediately have the latest value in question, above solution ensure that you receive the latest updates keeping the 'scheduled' updates in mind.
				}
		10 - onSubmit action on a form element, by default, reloads the entire page.  Prevent this with bellow code:
				const submitFormHandler = (event) => {
					event.preventDefault();
					//carry on here
				};
		11 - controlled component:  parent component that can both receive data from a child component and use it itself.  Where value chanages in a child component are handled by the parent component.
		12 - statefull vs stateless components:
			statefull:  contains logic to handle property states
			stateless:  mainly for presentation only

	NODE ERRORS
	    ERROR - when running 'npm install'
	        Error: Cannot find module 'semver'
	            at Function.Module._resolveFilename (module.js:337:15)
	            at Function.Module._load (module.js:287:25)
	            at Module.require (module.js:366:17)
	            at require (module.js:385:17)
	            at Object.<anonymous> (C:\Users\admin\AppData\Roaming\npm\node_modules\npm\l
	        ib\config\defaults.js:6:14)
	            at Module._compile (module.js:435:26)
	            at Object.Module._extensions..js (module.js:442:10)
	            at Module.load (module.js:356:32)
	            at Function.Module._load (module.js:311:12)
	            at Module.require (module.js:366:17)
	    FIX - this worked
	        close terminal
	        open new terminal
	        try again
	JSX - JavaScript XML
		html code embedded in JavaScript