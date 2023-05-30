import { useState } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import {Section} from './components/sections/Section'

function App() {

    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Section/>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    )
  }

export default App
