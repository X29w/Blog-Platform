import React from "react";
import { Fragment } from "react/jsx-runtime";

interface RenderListProps<T> {
  items: T[];
  renderItems: (item: T, index: number) => React.ReactNode;
  extraKey?: (item: T) => string | number;
}

const RenderList = <T,>({
  items = [],
  renderItems,
  extraKey,
}: RenderListProps<T>) =>
  items.map((item, index) => {
    const keyValue = extraKey ? extraKey(item) : index;
    return (
      <Fragment key={keyValue !== undefined ? keyValue : index}>
        {renderItems(item, index)}
      </Fragment>
    );
  });

export default RenderList;
