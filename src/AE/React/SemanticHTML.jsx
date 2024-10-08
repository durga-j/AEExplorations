import React from "react";

function SemanticHTML() {
  return (
    <main>
      <header>
        <h1>Welcome to the Accessible App</h1>
      </header>
      <section>
        <p>This is a paragraph with accessible content.</p>
        <button aria-label="Submit Form">Submit</button>
      </section>
      <div role="dialog" aria-labelledby="dialogTitle" aria-hidden="true">
      <h2 id="dialogTitle">Modal Title</h2>
      <p>This is a modal content.</p>
    </div>
    </main>

    
  );
}

export default SemanticHTML;
