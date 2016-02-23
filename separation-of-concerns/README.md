### Client-side concerns
- module management
- events
- presentation and DOM manipulation
- insternationalization
- data management and IO
- routing (translating urls to script actions)
- logging
- analytics tracking
- authentication
- feature toggling (decouple code deployment and feature release)

### Client-side event Patterns
#### 1. Event emitters
Downsides: 
- Every listener must be given a reference to the object
- Listeners are tightly coupled to emitters. (To get around this, one can use a event mediator or connector.)
- When nested views need to communicate to the top level, the child and parent must register with each other. Code overhead and debugging becomes painful.

#### 2. Event aggregators
- Definition: A central object that collects events from different sources and publishes them to registered subscribers.
- Eliminates the need for event mediators to decouple listeners from emitters.
- Enables very loose coupling between modules -- they just need a reference to the aggregator and awareness of the particular event.
- Disadvantage: No way to ensure that the message is being processed properly when it is published.

### More information:
- TodoMVC: http://todomvc.com
- Scalable Javascript Applications: http://slideshare.re/1pFIYUQ
- Patterns For Large-Scale Javascript Application Architecture: http://addyosmani.com
- Tinyapp: git://github.com/dilvie/tinyapp.git
- Event Aggregator (Martin Fowler): http://bit.ly/1lmVSWT
- Observer Synchronization (Martin Fowler): http://bit.ly/1lmVUxX
- Event Sourcing (Martin Fowler): http://bit.ly/1lmVYxD

