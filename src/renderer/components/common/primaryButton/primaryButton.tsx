import React, { ReactNode } from "react";
import "./index.scss";

export default function PrimaryButton({
  className,
  style,
  onClick,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
  children: ReactNode;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={'btn-custom-button ' + (className ? className : '')}
      // style={style ?? {}}
      style={style? style : {}}
    >
      {children}
    </button>
  );
}
