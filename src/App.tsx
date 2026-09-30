import { useState } from 'react';

import Input from './components/Input';

function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <p>{email}</p>
      <Input
        label="Email"
        type="text"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={email && !email.includes("@") ? "Invalid email" : undefined}
        helperText="We'll never share your email"
      />
    </div>
  )
}

export default App
