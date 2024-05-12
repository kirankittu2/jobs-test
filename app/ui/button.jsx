"use client";
import { useFormStatus } from "react-dom";

export default function Button({ name, onClick }) {
  const { pending } = useFormStatus();

  return (
    <button onClick={onClick} className="btn">
      {pending ? "Submitting.." : name}
    </button>
  );
}
