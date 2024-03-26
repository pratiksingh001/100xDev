# React + Vite

## Re-render 
Anytime a final DOM manipulation happens.

### Why do need React
React helps us to create dynamic websites. Dynamic website are the website whose contents changes very quickly.

### What is the end goal of using the React?
We want to minimize the number of re-renders.

### What does a re-render means?
- React did some work to calculate what all should in this component.
- The component actually got called.

### When does re-render happen?
- When a state variable that is being used inside a component changes.
- A parent component re-render triggers all the children re-rendering.