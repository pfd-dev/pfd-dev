"use client";

export default function UserLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
    </div>
  );
}
