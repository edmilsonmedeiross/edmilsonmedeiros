"use client";
import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button onClick={handleCopy}>
      {copied ? <FaCheck color="green" /> : <FaCopy />}
    </button>
  );
}
