"use client";
import React, { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: DashboardLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(login); // Corrected prop name
  return isLoggedIn ? (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {login}
    </div>
  );
}
