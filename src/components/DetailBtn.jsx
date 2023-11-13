import React from "react";

function DetailBtn({ detailBtn, id, children }) {
  return <button onClick={() => detailBtn(id)}>{children}</button>;
}

export default DetailBtn;
