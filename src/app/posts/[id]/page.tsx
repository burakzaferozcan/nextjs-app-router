import React from "react";

interface DynamicPageProps {
  params: {
    id: string;
  };
}

function DynamicPage(props: DynamicPageProps) {
  console.log(props);

  return <div>DynamicPage the id is: {props.params.id}</div>;
}

export default DynamicPage;
