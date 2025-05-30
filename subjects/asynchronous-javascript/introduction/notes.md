# Understanding Asynchronous JavaScript

An overview of how JavaScript handles synchronous and asynchronous operations. Based on the amazing [freeCodeCamp video](https://youtu.be/ZYb_ZU8LNxs?si=APefuv6-bLl-uLyc).

---

## Synchronous JavaScript

JavaScript is single-threaded and executes code line by line. In synchronous code:

- Each operation blocks the next.
- Long tasks can freeze the program.

**Analogy:**  
You're at an ice cream shop. You order, and everyone waits while your ice cream is prepared — one customer at a time.

---

## Asynchronous JavaScript

Asynchronous code allows JavaScript to handle tasks in the background and keep running other code.

Common async tools:
- `setTimeout()`
- Promises
- `async/await`
- Event listeners

**Analogy:**  
You order your ice cream, receive a buzzer, and go do something else. When it's ready, you're notified.

---

## The Event Loop

The event loop is what makes async JavaScript work.

- **Call Stack**: executes current code.
- **Web APIs**: handle background tasks.
- **Callback Queue**: stores ready-to-run tasks.
- **Event Loop**: moves tasks from queue to stack when idle.



So... basically
- **Synchronous** = blocking, step-by-step
- **Asynchronous** = non-blocking, multitasking
- The **event loop** connects the dots

Consider this code:

```js

console.log(" I ");
console.log(" eat ");

setTimeout(() => {
    console.log(" ice cream ");
}, 4000);

console.log(" with a ");
console.log(" spoon ");


Time →
───────────────────────────────────────────────

[ Call Stack ]                     [ Web APIs ]
  ┌─────────────┐                     ┌────────────┐
  │ console.log │                     │ setTimeout │
  │ "I"         │                     │ 4 seconds  │
  └──────┬──────┘                     └──────┬─────┘
         │                                    │
  ┌──────▼──────┐                   (timer runs)
  │ console.log │
  │ "eat"       │
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │ console.log │
  │ "with a"    │
  └──────┬──────┘
         │
  ┌──────▼──────┐
  │ console.log │
  │ "spoon"     │
  └──────┬──────┘
         │
(Call Stack empty)

─────────────> After 4 seconds

[Callback Queue]
 ┌──────────────────────────┐
 │ setTimeout callback waits│
 └──────────────────────────┘

Event Loop moves callback → Call Stack

[ Call Stack ]
 ┌─────────────┐
 │ console.log │
 │ "ice cream" │
 └─────────────┘
