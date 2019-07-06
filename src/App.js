
import React from 'react'

import Header from '../src/components/header/header'
import TopBanner from '../src//components/banner/topBanner'
import Feature from '../src/components/features/features'
import MainGallery from '../src/components/mainGallery/mainGallery'
class App extends React.Component{
  render(){
    return (
    <>
    <Header/>
    <TopBanner/>
    <Feature/>
    <MainGallery/>
    </>
    )
  }
}


export default App;
