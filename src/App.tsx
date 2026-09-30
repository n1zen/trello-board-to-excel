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

  return (
    <Card className="max-w-sm m-auto mt-12">
      <CardHeader className="text-center">
        <CardTitle>Trello Boards to Excel</CardTitle>
        <CardDescription>Work in progress</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-row justify-center items-center">
        
      </CardContent>
      
      <CardFooter>
        <p className="text-xs">Made by <a href="louie-izen-torres-portfolio.vercel.app" target="_blank">n1zen</a> 2026</p>
      </CardFooter>
    </Card>
  );
}

export default App
