import React, { Profiler, useState } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
) {
  console.log(`${id} [${phase}] took ${actualDuration} ms to render`);
}

const Header = () => {
  return <h1>Welcome to the Application</h1>;
};

const Content = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>{text}</p>
    </div>
  );
};

const Footer = () => {
  return <footer>Hellooo World!!</footer>;
};

function ProfilerExp() {
  return (
    <div>
      <Profiler id="Header" onRender={onRenderCallback}>
        <Header />
      </Profiler>

      <Profiler id="Content" onRender={onRenderCallback}>
        <Content />
      </Profiler>

      <Profiler id="Footer" onRender={onRenderCallback}>
        <Footer />
      </Profiler>
    </div>
  );
}

export default ProfilerExp;
