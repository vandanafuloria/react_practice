![img](https://www.patterns.dev/img/reactjs/react-logo@3x.svg)

# _React Basics_

# Content

- [Rendering List](#rendering-lists)
- [Events Handle in React](#events-handle-in-react)
- [State: a component's memory](#state-a-components-memory)

## _Rendering Lists_

## _Events Handle in react_

- In JSX, we can add event handlers by setting attributes like onClick, onMouseOver, etc., and passing a callback function as a prop.

- Event handlers are usually defined inside your components and typically follow a naming convention: they start with handle, followed by the name of the event (e.g., `handleClick, handleMouseOver`).

`function name`

```javascript
return <button onClick={handleClick}>Click me</button>;
```

`Inline function defination`

```javascript
<button onClick={function handleClick() {
alert('You clicked me!');
}}>
```

`Arrow function`

```javascript
<button onClick={() => {
  alert('You clicked me!');
}}>
```

`In the event handling, function must be pass not call `

```javascript
✅
// passing a function
<button onClick={handleClick}>

❌
// calling a function
<button onClick={handleClick()}>

```

_The difference is subtle. In the first example, the handleClick function is passed as an onClick event handler. This tells React to remember it and only call your function when the user clicks the button._

_In the second example, the () at the end of handleClick() fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX { and } executes right away._

## 🔑 When function written inline

```javascript
✅
// wrap it in anonymous function

<button onClick={() => alert('You clicked me!')}>
```

```javascript
❌
// This alert fires when the component renders, not when clicked!

<button onClick={alert('You clicked me!')}>

```

# State: A Component's Memory

_If something needs to change in the UI in response to an event, state should be used._

- You shouldn't use local variables for such cases because when a component re-renders, local variables are re-initialized, meaning their values are reset to their initial state. They do not persist across renders.

- To manage and preserve values between renders, React provides Hooks, such as useState, which allow components to hold and update state properly.

`import { useState } from 'react';`

```javascript
const [index, setIndex] = useState(0);
```

_The useState hook returns an array containing exactly two values:_

_The current state value_

_A setter function to update that value_

_When you call the setter function with a new value (different from the current one), React triggers a re-render of the component and updates the state accordingly._
