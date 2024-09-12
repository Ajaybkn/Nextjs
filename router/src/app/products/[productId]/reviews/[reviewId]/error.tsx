"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      Error in review Id--{error.message}
      <span>
        <button onClick={reset}>Try Again</button>
      </span>
    </div>
  );
}
