import { useState } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import {SectionOne} from './components/sections/SectionOne'
import {SectionTwo} from './components/sections/SectionTwo'

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
          <SectionOne/>
        </div>
        <div className="section-2">
          <SectionTwo/>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    )
  }

export default App
