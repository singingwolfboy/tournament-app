import * as React from "react";
import PasswordProtected from "./PasswordProtected";

export default function Admin() {
  return (
    <PasswordProtected password="123">
      <h2>Admin</h2>
    </PasswordProtected>
  );
}
