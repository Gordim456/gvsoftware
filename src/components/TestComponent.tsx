
import React, { useState } from "react";

const TestComponent: React.FC = () => {
  const [testState, setTestState] = useState(false);
  
  console.log("🔥 TEST: TestComponent rendered, testState:", testState);
  
  return (
    <div className="fixed top-4 left-4 z-50 bg-yellow-500 text-black p-2 rounded">
      <button onClick={() => setTestState(!testState)}>
        Test: {testState ? 'On' : 'Off'}
      </button>
    </div>
  );
};

export default TestComponent;
