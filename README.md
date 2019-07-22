# 100days-of-code-2019

| Project | Status |
| ------- | ------ |
|         |        |
|         |        |


# Mongoose
- https://stackoverflow.com/questions/53942597/when-to-use-new-objectidstring-id-over-objectidstring-id-in-mongoose

# Npm Packages
- https://www.npmjs.com/package/@hapi/joi
- mongoose
- validator
- mongodb
- require


# Terminologies

- Synchronous = doing one line of code at a time
- Asynchronous
- Thread of execution
- Memory/variable environment
- Callstack
- Callback function = A function that is passed as an argument to a higher-order function. The higher-order function then invokes the callback function

# Day 1

## What I did today

- Learned how to implement my own array helper functions. This the functions I implemented.
  - map
  - filter
  - reduce
- I also implemented curry and compose

# Day 2

## What I learned today

- I learned that even if a variable isn't declared but you the `typeof` on that variable that doesn't exist it returns undefined;

- variables that are declared using `var`, `let` and `const` cannot be deleted using the unary operator `delete`

## Questions

---

- Why when invoking an inline function the 'this' keyword refers to the Window object instead of the element that was clicked on

I answered Lydia Hallie's Javasript questions

This are the number of the questions I made mistakes in.

- 22
- 24
- 29
- 32
- 38
- 44
- 45
- 46
- 48
- 52
- 57
- 58
- 61
- 62
- 63

I will learn this things to correct my mistakes

- Generators
- Promises
- hello

# Day 3

## What I learned today

- Learned about the Javascript event loop
- Learned how promises work under the hood
- Learned about the call stack, callback queue and microtask queue

# Day 4

## Question ans Answers

- `package.json` vs `package-lock.json`
- how `require` works under the hood in Node
-

# Day 5

- Made a note taking app using node with the help of yargs and chalk npm modules

# Day 6

- Made API request using request module on npm
- Made callback functions
- Learned how the call stack, event loop works

# Day 7

- Default port in node when opening a port using http is port `80`
- who node doesn't include `fs` and `path` module right out of the box? Why do we need to require it?
- why is `res.end` isn't accessible in global but instead just accessible as a a methond in an object passed in a callback

# Day 8

- Learned how promises works

Questions

- why hbs npm module doesn't need to used `require()`
- how does express know where `views` folder is located without explicitly telling it
  - using `process.cwd()`
- isn't the network error in the node useless if you are using the browser.

# Day 9

- Learned how to use mongodb
- learned to use mongodb commands
	- insertOne
	- insertMany
	- deleteOne
	- deleteMany
	- find
	- findOne
	- updateOne
	- updateMany

# Day 10

- Learned how to use localStorage

# Day 11

- I learned that you set a default layout in handlerbars in express


# Day 12

- learned that you have to to put `res.status(statusCode)` so the statusCode is accurately displayed. Because if you dont put any status code express defaults to statuscode `200`
Questions
- whatt is `__v` in mongoose
- what is `useCreateIndex` and `useNewUrlParser` in mongoose
- In the video Resource Reading Endpoints Part II, Why the teacher didn't send status code (404) when database returns an empty array(using find({})) but sent status code(404) when database cannot find a single document using `findById(_id)`


# Day 13
- Learned how to use postman

Questions
- What is the difference between form-data, x-www-form-urlencoded and raw in the Postman

# Day 14


Questions
- Learned what is a middleware