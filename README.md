# README

**Goals**

- To set up a node project
- To install tailwind inside that node project
- To push the project to github
- To use keyboard events to change css/tailwind classes
- **To Understand why any of this is important**

## Step 0: Install node

- [nodejs install docs](https://nodejs.org/en/download)
- Pick between chocolatey package manager or .msi install
- so we can see and use javascript outside of the browser
- allows us to access functionality we don't have to built it ourselves
- Assumptions
  - ability to install packages (so stuff will need to download based on each project)
  - access to configuration of packages
  - ability to use features from packages

## Step 1: Set up a node project

- if first time: verify node is installed: `node -v`
- initialize a project `npm init` (with flag `-y`)
- try to run the project
- create files to run in this project
- what is a package.json file?
- `npm help init` for assistance with init command
- `npm install <pkg>` to install 'dependencies'
- `<ctrl> + c` to cancel setup

## Scripts

- The `"scripts": {},` object is where we can define commands.
- common commands include `start`, `build`, `dev`, and `test`
- any commands that you don't want to have to write out over and over again can be simplified here
- they can also be automated (but that is another day.)

## Installing Dependencies

- we can install stuff
- `npm` is important
- use documentation first for install instructions
- can ai help? maybe -> verify against docs

### Steps

1. ## install: `npm install tailwindcss @tailwindcss/cli`

- [docs](https://tailwindcss.com/docs/installation/tailwind-cli)

1.  Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.
2.  add tailwindcss import to styles.css
3.  edit the npx tailwindcss command to build an output file where we want it (make sure the input file location is also correct)
4.  add a link to the output css file in the html head
5.  run the npx command to verify that it works
6.  add the npx command to `scripts` in `package.json` so we can easily run it
7.  Start styling stuff with tailwind (while the command is running)

**IMPORTANT**: After initializing a git repo, it's essential for us to hide `node_modules`

## Set up git

- create `.gitignore` to hide the `node_modules` from git
  - because we don't want to track other people's repos
  - write `node_modules` inside of the `.gitignore` file
- git init, add, commit, push as normal
