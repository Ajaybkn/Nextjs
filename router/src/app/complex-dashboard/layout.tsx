"use client";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: DashboardLayoutProps) {
  console.log(notifications); // Corrected prop name
  return (
    <div>
      <button>change look</button>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  );
}
