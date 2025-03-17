# Bubbling and Capturing in Event Handling
## What is Bubbling?
Bubbling is the process where an event triggered on a nested element propagates up through its parent elements, like a bubble rising in water. This means that if an event occurs on a child element, it will first execute on that element and then move up to its ancestors.

### Example:
```
<form onclick="alert('form')">FORM
    <div onclick="alert('div')">DIV
        <p onclick="alert('p')">P</p>
    </div>
</form>
```

If you click on the <p> element, the event will "bubble up," triggering the following alerts in order:
1. p
2. div
3. form

## What is Capturing?
Capturing, also known as the "capture phase," is the opposite of bubbling. Instead of propagating from the target element up to its ancestors, it starts from the topmost ancestor and moves down to the target element. It is less commonly used but can be useful in certain scenarios, such as when you need to intercept events before they reach their intended target.

For example, if you click on a <p> element inside a <div>, which is inside a <form>, and all elements have event listeners in the capturing phase ({ capture: true }), the alerts will fire in the following order (from outermost to innermost):

1. form
2. div
3. p

## Understanding event.target and this.currentTarget
During event propagation, there are two ways to reference elements:
event.target → Refers to the element that triggered the event. This remains constant throughout propagation.
this.currentTarget → Refers to the element to which the event handler is attached. This changes depending on which element is handling the event.
Example:

```
document.querySelector('form').addEventListener('click', function (event) {
    console.log('Event Target:', event.target.tagName); // The element that was clicked, if you click on <p>, the output will be: P
    console.log('Current Target:', this.tagName); // Always 'FORM' because the handler is on <form>
}, { capture: true });
```
