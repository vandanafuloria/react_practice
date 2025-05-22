![img](https://www.patterns.dev/img/reactjs/react-logo@3x.svg)

# _React Basics_

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
