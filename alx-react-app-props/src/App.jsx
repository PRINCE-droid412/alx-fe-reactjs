import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import React from "react";
import UserContext from "./UserContext";


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={{ user: userData }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserProfile
          name="Alice"
          age={25}
          bio="Loves hiking and photography."
        />
      </div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <Counter />

    </>
  )
}

export default App
