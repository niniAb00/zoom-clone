import React from "react";

const Meeting = ({ params }: { parmas: { id: string } }) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default Meeting;
