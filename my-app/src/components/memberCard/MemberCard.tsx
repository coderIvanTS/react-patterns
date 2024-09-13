import { FC, memo } from "react";
import "./style.scss";

import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<UserProps> = memo(({ name, ...childProps }) => {
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo  {...childProps} />
    </div>
  );
});