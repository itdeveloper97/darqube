import Link from "next/link";
import { useRouter } from "next/router";
import { Children } from "react";
import React from "react";

export const ActiveLink = ({ children, activeClassName, ...rest }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const className =
    asPath === rest.href || asPath === rest.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...rest}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};
