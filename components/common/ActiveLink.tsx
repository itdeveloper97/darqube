import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children, FC, PropsWithChildren } from "react";
import { LinkProps } from "next/dist/client/link";

interface IProps extends LinkProps {
  activeClassName: string;
}

export const ActiveLink: FC<IProps> = ({
  children,
  activeClassName,
  ...rest
}) => {
  const { asPath } = useRouter();
  const child = Children.only<PropsWithChildren<any>>(children)!;
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
