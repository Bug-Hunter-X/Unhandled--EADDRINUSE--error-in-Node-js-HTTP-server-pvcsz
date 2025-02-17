# Unhandled 'EADDRINUSE' error in Node.js HTTP server

This repository demonstrates a common error in Node.js: the 'EADDRINUSE' error, which occurs when a server attempts to bind to a port that is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a robust solution.

## Problem
The `bug.js` file creates a simple HTTP server using the `http` module.  However, if port 8080 is already occupied (e.g., by another application or a previous instance of the server), the server will fail to start and throw an 'EADDRINUSE' error.

## Solution
The `bugSolution.js` file addresses this by implementing error handling.  It attempts to bind to the port, and if it fails (due to 'EADDRINUSE'), it retries after a short delay, logging a helpful message.  This ensures that the server will eventually start successfully if the port becomes available.