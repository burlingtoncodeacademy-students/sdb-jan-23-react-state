# React State

State is any data within a component that might change. State allows us to track those changes and refresh our virtual DOM based on those changes.

#### Examples of state changes:

- Newsfeed posts
- Login
- Number of likes on a post

### Using State

1. Import `useState` hook
```jsx
import { useState } from "react"
```
2. `useState()` function returns an array of initial state and the function to update the initial state
3. Assign it to an array destructured syntax of a variable and its `set` function

```jsx
const [ sampleState, setSampleState ] = useState(initialValue)
```
> HINT
> Using useState() allows React to know when to re-render a component which provides us with most up-to-date data on the screen.

Shortcut for React Snippets

- rfce - react functional component export