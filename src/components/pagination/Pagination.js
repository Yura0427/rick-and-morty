import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationPage({info, active, setActive}) {
  let items = [];
  for (let number = 1; number <= info.pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => {
          setActive(+e.target.innerHTML);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination style={{maxWidth:'95%', overflow:'auto'}}  size="sm">{items}</Pagination>;
}
