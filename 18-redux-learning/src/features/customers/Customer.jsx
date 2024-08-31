import { useSelector } from "react-redux";

function Customer() {
  // const customer = useSelector((store) => store.customer);
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, %NAME% {customer}</h2>;
}

export default Customer;
