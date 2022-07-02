SOURCE CODE
	complete guide
		https://github.com/academind/react-complete-guide-code
	beginning of course
		https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components
	end of module 3 lecturer's code
		https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components
	end of module 4
		https://github.com/academind/react-complete-guide-code/tree/04-react-state-events
	end of module 5
		https://github.com/academind/react-complete-guide-code/tree/05-rendering-lists-conditional-content
	end of module 6
		https://github.com/academind/react-complete-guide-code/tree/06-styling
	end of module 7
		https://github.com/academind/react-complete-guide-code/tree/07-debugging
	end of module 8 - this project contains a bit of everything learnt so far including the 'modal' element (informatic dialog).
		https://github.com/academind/react-complete-guide-code/tree/08-practice-project
	end of module 9 - this project contains controlled and uncontrolled components, portals, fragments (div soup)
		https://github.com/academind/react-complete-guide-code/tree/09-fragments-portals-refs

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
		1 - Lower case markup is html and uppercase is React.  The React engine uses this convention to detect custom React componnets.
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
		13 - working with lists:  alwaays identify a key/id when working with lists, eg (notice the line with 'props.id' in the code snippet bellow):
		function ExpenseItem(props) {
		    return (
		        <Card className='expense-item'>
		            <ExpenseDate date={props.date} />
		            <div key={props.id} className='expense-item__description'>
		                <h2>{props.title}</h2>
		                <div className='expense-item__price'>R{props.amount}</div>
		            </div>
		        </Card>
		    );
		}
		14 - (``) template literal, used for dynamic string creation, eg:  `orm-control ${!isValid ? 'invalid' :""}`
		15 - tagged tempalte literal, eg:  const Button = styled.button``;
		16 - media queries:  the bellow will detect the screen width of the screen and auto adjust styling accordingly
			@media (min-width: 768px) {
			  width: auto;
			}
		17 - CSS modules - https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
			rename .css files
				from 
					import './Button.css';
				to
					import styles from './Button.module.css';
			the main ide for css modules
		18 - debugging react code in chrome:  0
			debugging via chrom/browser
				perss F12
				go to Sources
				on the page view go to the folder indicated as your code (NOTE:  may also be in the webpack folder)
				drill down to the js file in question that you want to debug
				click on the number of the line that you want to place a brake point on
				press F10 or the 'step over' icon (on the debug toolbar top right of the screen) in order to proceed to the next executable line of code.
			using 'react developer tools', a chrome extention
				extention will add two additional menu's to the F12 view:  Components and Profiler both with purple icons.
				Components:  this tab will show you the react compoent tree in view
		19 - binding a label with an input field in jsx (react)
			    <label htmlFor="username">Username</label>
            	<input id="username" type="text"/>
        20 - Press 'Shift+Ctrl+P' to open up the command palette
   			for formatting:  S+C+P > Format With > TypScript and JavaScript language features (will give you a tab space of 4)
   		21 - insert compoent's inssers into component:  props.children
   			const Card = (props) => {
			    return (
			        <div>{props.children}</div>
			    )
			};
		22 - Array destructuring:  const [enteredUserName, setEnteredUserName] = useState('');
		23 - Logical or if (or/if):
			if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
	            return;
	        }
	    24 - Converting String to Number (place a '+' in front of the value in question):
	    	+enteredAge
	    25 - instantiation of an empty array:  []
	    26 - generate random numbers in react for keys:  Math.random().toString()
	    27 - JSX limitations:
	    	JSX can only return one root element and no more, eg:
	    		return (
	    			<h2>Hi There</h2>
	    			<p>This does not work</p>
	    		):
	    		same with Javascript
	    		return (
	    			React.createElement('h2', 'Hi There');
	    			React.createElement('p', 'This does not work');
	    		);
	    	The solution is always to wrap the code in a single element, eg:
	    		return (
	    			<div>
		    			<h2>Hi There</h2>
		    			<p>This does not work</p>
	    			</div>
	    		):
	    	One could return an array but this would result in an error where react would want a unique key for each element as bellow:
	    		return [
	    			<h2>Hi There</h2>
	    			<p>This does not work</p>
	    		];
	    		unique key error
	    		return [
	    			<h2 key="1">Hi There</h2>
	    			<p key="2">This does not work</p>
	    		];
	    		this would work but is rather cumbersome, it is easier to just wrap the elements in a div.
	    	This, however, can lead to the phenomena known as 'div soup' as illustrated bellow:
	    		<div>
	    			<div>
	    				<div>
	    					<h2>Heading here</h2>
	    				</div>
	    			</div>
	    		</div>
	    		this can lead to a project containing many nested div's that add no semantic or structural meaning.
	    	Div soup can be fixed by using this Wrapper componenet to return the elements as 'not-an-array':
	    		const Wrapper = (props) => {
				    return props.children;
				};

				export default Wrapper;
				NOTE:  this is the complete listing of the 'Wrapper' component.
				Bellow is an example of how to use this component:
				return (
	    			<Wrapper>
		    			<h2>Hi There</h2>
		    			<p>This does not work</p>
	    			</Wrapper>
	    		):
	    	Div soup can also be prevented by using the following two methods:
	    		1 - Fragments:
	    		return (
	    			<React.Fragment>
		    			<h2>Hi There</h2>
		    			<p>This does not work</p>
	    			</React.Fragment>
	    		):
	    		2 - Short cut:
	    		return (
	    			<>
		    			<h2>Hi There</h2>
		    			<p>This does not work</p>
	    			</>
	    		):
	    		NOTE:  the 'Short cut' will need some configuration on the project in order for it to work.
	    28 - React Portals - the simple idea behind react portals is that the defined react elements are show in a pre-defined spot anywhere in the application but most commontly the inex.html page.
	    	create the import statement and the jsx expression
	    		import ReactDom from 'react-dom';

	    		{ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
	    	create the portal expression
	    		<div id="backdrop-root"></div>
	    	ReactDom expression can be used anywhere that we are using JSX code
	    29 - Using Ref's
	    	import useRef
	    		import React, {useRef} from 'react';
	    	create the ref const value
	    		const nameInputRef = useRef();
	    	attach it to an element
	    		<input id="username" type="text" onChange={userNameStateChangeHandler} value={enteredUserName} ref={nameInputRef}/>
	    	get the ref value
	    		const enteredName = nameInputRef.current.value;
	    	to reset the ref value
	    		nameInputRef.current.value = '';
	    	NOTE:  the above code snippet performs DOM manipulation and is not recommended but works well and is widely used
	    	NOTE:  this method of using Ref's is also referred to as 'uncontrolled components'
	    30 - Effects
	    31 - Reducers:  managing complex state
	    32 - Context:  managing app-wide and/or component-wide state
	    33 - Effects and Side Effects
	    	Browser Storage
	    		local storage
	    			localStorage.setItem('isLoggedIn', '1');
	    			visible on F12 > applications > storage > host url
	    	Http requests
	    	Timers
	    		These tasks happen outside of the normal component evaluation and render cycle
	    		can be simply described as a trigger to perform a task in response to an event
	    	useEffect
	    		useEffect(() => {}, []);
	    		{} this indicates that whatever is between these parenthesis will be executed
	    		[] this indicates that whatever is between {} will be executed when whatever is in [] changes
	    		NOTE:  three things to not put inside of []
	    		1 - the 'setXXX' functions
	    		2 - not built in api functions like fetch() and localstorage
	    		3 - functions or variables defined outside of the components
	    		example:
		    		xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		    		import { useEffect, useState } from 'react';
	 
					let myTimer;
					 
					const MyComponent = (props) => {
					  const [timerIsActive, setTimerIsActive] = useState(false);
					 
					  const { timerDuration } = props; // using destructuring to pull out specific props values
					 
					  useEffect(() => {
					    if (!timerIsActive) {
					      setTimerIsActive(true);
					      myTimer = setTimeout(() => {
					        setTimerIsActive(false);
					      }, timerDuration);
					    }
					  }, [timerIsActive, timerDuration]);
					};
					xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
					In this example:
						timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)
						timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)
						setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change
						myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated
						setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
					xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
					useEffect(() => {  								//qualifier
					    console.log('EFFECT RUNNING'); 				//use effect innerds
					    return (() => { 							//clean up qualifier, will run just before the userEffect call
					        console.log('EFFECT CLEANUP'); 			//clean up inners
					    });
					}, [enteredPassword]); 							//value that, when changed, will trigger a useEffect call
		34 - useReducer
			import:  import React, {userReducer} from 'react';
			anatomy:  const [state, dispatchFunction] = userReducer(reducerFunction, initialState, initialStateFunction);
			state - state snapshot
			dispatchFunction - function used to dispatch a new action, ie:  trigger of a state update
			reducerFunction - function that is triggered straight after the dispatchFunction, receives the latest state snapshot and should received an updated state snapshot
			initialState - initial state value of the object/field in question
			initialStateFunction - function that will set the initial state of the object/value in question




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
	ERROR
		ran 
			npm install
		received
			WARN deprecated core-js@2.6.12: core-js@<3.4 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
		read
			https://stackoverflow.com/questions/59354180/error-please-upgrade-your-dependencies-to-the-actual-version-of-core-js3
		run
			npm install --save core-js@3.4
		received
			added 6 packages, removed 6 packages, changed 169 packages, and audited 1886 packages in 10s

			167 packages are looking for funding
			  run `npm fund` for details

			28 vulnerabilities (1 moderate, 19 high, 8 critical)

			To address issues that do not require attention, run:
			  npm audit fix

			To address all issues (including breaking changes), run:
			  npm audit fix --force

			Run `npm audit` for details.

		run
			npm audit
		received
			...
			28 vulnerabilities (1 moderate, 19 high, 8 critical)

			To address issues that do not require attention, run:
			  npm audit fix

			To address all issues (including breaking changes), run:
			  npm audit fix --force
		run
			npm audit fix --force
		outcome
			it worked, i was able to run the 'npm start' command successfully and have the application up and running.
	ERROR
		message
			UsersList.js:8 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
		interpretation
			the 'props' value to be forwarded to a component has not been declared.  The first 'at' line of the stack trace should tell you which compoent is the offending one.