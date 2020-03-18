# Design
- why i favored this design?
- Because: State at top level component and stateless child components is always preferred in React.
- Good apprach would be: use few callbacks from child component, 2 levels of nesting from the top most component,
    use  ES6 destructuring, Immutability Helpers, triple dot ...(Rest Parameters) operator to manage the state at the top component (on receiving data from children) and keep all the children as stateless components.
- improve test coverage
- If you have components that need 'events' to be passed down and not state (data), or if your nested levels are going beyond 2 and code is unmanageable then you have to explore state management frameworks like Redux. 