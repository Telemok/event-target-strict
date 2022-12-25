# event-target-strict

[event-target-strict] https://github.com/Telemok/event-target-strict Javascript ES6 EventTarget with .destroy() instead of .removeEventListener()

## Features

- Easiest way to removeEventListener() with .destroy() function
- String event types

## Instalation:
1. Create your NodeJs, Browser or Webview app.
2. import { event-target-strict } from ".../event-target-strict.min.js"

## Functionality:

```javascript
let listenerClick = obj.addEventListener('change',()=>{
	alert('change');
});
...
listenerClick.destroy();
```

## Examples:

1. Using

  ```javascript
import { event-target-strict } from "http://127.0.0.1:8080/lib/event-target-strict.js"

let listenerClick = obj.addEventListener('change',()=>{
	alert('change');
});
...
listenerClick.destroy();
  ```

