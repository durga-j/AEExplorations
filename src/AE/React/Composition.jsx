import React from "react";

function Header() {
  return <header>Header Section</header>;
}

function Content() {
  return <main>Main Content</main>;
}

function PageLayout() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default PageLayout;
