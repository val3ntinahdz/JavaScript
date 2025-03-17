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

# What is Capturing?
