import { useState } from 'react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from './components/Card';

import Input from './components/Input';

function App() {
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState("");

  return (
    <Card className="max-w-xl m-auto mt-12">
      <CardHeader className="text-center">
        <CardTitle>Trello Boards to Excel</CardTitle>
        <CardDescription>Work in progress</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col justify-center items-center gap-5">
        {/** API KEY INPUT */}
        <Input
          label="API Key"
          type="text"
          placeholder="Place your Trello API Key here..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          helperText="We'll never share your API Key"
        />  
        {/** API TOKEN INPUT */}
        <Input
          label="Token"
          type="text"
          placeholder="Place your trello token here..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
          helperText="We'll never share your Token"
        />
      </CardContent>
      
      <CardFooter>
        {/** Submit button for API Key and Token */}
      </CardFooter>
    </Card>
  );
}

export default App
