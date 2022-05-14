import React from "react";
import { ErrorResult } from "../../components";
import { useDocumentTitle } from "../../utils";

export const Error = () => {
  useDocumentTitle("404 Not Found | KemmelTube");

  return (
    <main className="wrapper p-1">
      <ErrorResult />
    </main>
  );
};
