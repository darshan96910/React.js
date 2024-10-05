React.js Notes
1. Overview
What is React?
A JavaScript library for building user interfaces, developed by Facebook.
Focuses on building reusable UI components.

2. Core Concepts
Components

Functional Components: Simple functions returning JSX.
Class Components: ES6 classes with state and lifecycle methods (less common now).
Pure Components: Optimized class components that only re-render when props or state change.
JSX

A syntax extension that allows mixing HTML-like syntax with JavaScript.
Example:
jsx
Copy code
const element = <h1>Hello, world!</h1>;
Props

Short for properties; used to pass data from parent to child components.
Immutable within the child component.
State

A built-in object that holds data that may change over time.
Managed within a component using the useState hook (for functional components).
Hooks

Functions that let you use state and other React features in functional components.
Common hooks:
useState(): For managing state.
useEffect(): For side effects (e.g., data fetching, subscriptions).
useContext(): For accessing context values.


3. Lifecycle Methods (Class Components)
Common lifecycle methods:
componentDidMount(): After the component is mounted.
componentDidUpdate(): After updates.
componentWillUnmount(): Before the component is removed.


4. Event Handling
React handles events similarly to DOM events but uses camelCase.
Example:
jsx
Copy code
function handleClick() {
  alert('Button clicked!');
}

<button onClick={handleClick}>Click me</button>


5. Conditional Rendering
Use logical operators or ternary operators to render components based on conditions.
Example:
jsx
Copy code
{isLoggedIn ? <LogoutButton /> : <LoginButton />}


6. Lists and Keys
Render lists using the map() function.
Use unique keys to identify items for efficient updates.
Example:
jsx
Copy code
const items = [1, 2, 3];
return (
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);


7. Forms
Controlled components manage form data via state.
Example:
jsx
Copy code
const [inputValue, setInputValue] = useState('');

const handleChange = (e) => {
  setInputValue(e.target.value);
};

return <input value={inputValue} onChange={handleChange} />;


8. Context API
Used for global state management without prop drilling.
Create context with React.createContext() and use useContext() to access it.


9. React Router
Used for routing in single-page applications (SPA).
Common components:
<BrowserRouter>: Wraps the application.
<Route>: Defines a route.
<Link>: Navigation between routes.


10. Styling
CSS Modules: Scoped styles.
Styled Components: CSS-in-JS approach.
Emotion: Another CSS-in-JS library.
Use traditional CSS or frameworks (Bootstrap, Material-UI).


11. Testing
Libraries: Jest (testing framework), React Testing Library (for component testing).
Focus on unit tests and integration tests for components.


12. Best Practices
Keep components small and focused (Single Responsibility Principle).
Use prop types or TypeScript for type checking.
Maintain component reusability.
Optimize performance using React.memo() for functional components and shouldComponentUpdate() for class components.
Keep state local as much as possible and lift it up when needed.


13. Common Commands
Start a new app:
bash
Copy code
npx create-react-app my-app
Start development server:
bash
Copy code
npm start
Build for production:
bash
Copy code
npm run build


14. Useful Resources
Official Documentation: React Docs
This guide provides a foundational overview of React.js. If you have specific areas you want to dive deeper into, just let me know!
