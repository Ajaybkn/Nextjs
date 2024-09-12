"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  // Move the useRouter call to the top level of the component
  const router = useRouter();

  const handleClick = () => {
    console.log("order placed");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
