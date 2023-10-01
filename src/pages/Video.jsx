// import React, { useEffect } from 'react'
import './video.css'
import Header from './components/Header'
import Nav from './components/Nav'
import { UseData } from '../Export'


const Video = () => {
  // data from export file 
  const {videodata} = UseData();
  return (
    <div className='video-wrapper'>
      <div className="video-header container-fluid">
        <Header />
      </div>
      <div className="video-main container">
        <div className="video-left"></div>
        <div className="video-right">
          <div className="right-nav">
          <Nav/>
          </div>
          <div className="right-suggestion-videos">
            {videodata.map((data)=>(
              <div className="suggest-video">
                  <div className="suggest-thumpnail">
                <img src={data.thumpnail} alt="vfgf" />
                <p>{data.time}</p>
              </div>
              <div className="suggest-contents">
                <div className='suggest-content-chimg'>
                  <img src={data.channelimg} alt="chimg"/>
                </div>
                <div className='suggest-content-content'>
                  <h3>{data.title}</h3>
                  <h6>{data.channelname}</h6>
                  <p>{data.views} views . {data.posttime}</p>
                </div>
                <div className='suggest-content-menu'>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video