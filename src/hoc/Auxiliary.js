// this higher order component will simply return props.children
// the purpose is so that we can place components adjacent to one another without having to wrap them in a div
const Aux = (props) => props.children;

export default Aux;