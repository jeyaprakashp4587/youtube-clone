import React, { useEffect, useState } from 'react'
import './home.css'
import Header from './components/Header'
import SideData from './json/sidebardatat.json'
import Videos from './json/videos.json' 
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import { UseData } from '../Export'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // navigate to video when click video div
  const hr = useNavigate();
  const nav = ()=>{
    hr('/video');
  }
  // data from export file
  const {setVideodata} = UseData();
  // const {videodata}  = UseData();
  // fertch data for side nav
  const [sidebar1, setSidebar1] = useState([]);
  const [sidebar2, setSidebar2] = useState([]);
  const [sidebar3, setSidebar3] = useState([]);
  // video data from fetch
  const [videos, setVideos]  = useState([]);
  
  useEffect(()=>{
   setSidebar1(SideData.bar1);
   setSidebar2(SideData.bar2);
   setSidebar3(SideData.bar3);
   setVideos(Videos.videos);
  //  console.log(videos);
  setVideodata(videos);
  },[sidebar1,sidebar2,sidebar3,setVideodata,videos]);

  return (
    <div className='Home-wrapper'>
      <div className='header'>
        <Header />
      </div>
      <div className='side-wrapper'>
        {/* side bar 1 */}
      <div className="wrapper1">
        {sidebar1.map((data)=>(
          <Link className='link' to={data.route}>
        <div className="bars" key={data.id} >
          <p> <i className={data.icon}></i>{data.name}</p>
        </div>
        </Link>
        ))}
      </div>
        {/* side bar 2 */}
      <div className="wrapper2">
        {sidebar2.map((data)=>(
         <div className="bars" key={data.id}>
         <p> <i className={data.icon}></i>{data.name}</p>
       </div>
        ))}
      </div>
      {/* side bar 3 */}
      <div className="wrapper3">
        {sidebar3.map((data)=>(
         <Link className='link' to={data.route}>
         <div className="bars" key={data.id}>
         <p> <i className={data.icon}></i>{data.name}</p>
       </div>
       </Link>
        ))}
      </div>
      {/* sidebar footer */}
      <div className="sidebar-footer">
        <p>About press Copyright Contact us Creator Adverse Developers</p>
        <p>Terms Privacy Policy & Safety How Youtube Works Test new features</p>
        <p>© 2023 Google LLC</p>
      </div>
      </div>
      <div className='main-wrapper'>
       <div className="main-wrapper-nav">
        <Nav />
       </div>
       {/* main wrapper */}
       <div className="main-wrapper-pages">
        {videos.map((data)=>(
         <div className="videos" onClick={nav}>
          <div className="videos-thumpnail">
            <img src={data.thumpnail} alt="vfgf" />
            <p>{data.time}</p>
          </div>
          <div className="video-contents">
            <div className='video-content-chimg'>
              <img src={data.channelimg} alt="chimg"/>
            </div>
            <div className='video-content-content'>
              <h3>{data.title}</h3>
              <h6>{data.channelname}</h6>
              <p>{data.views} views .{data.posttime}</p>
            </div>
            <div className='video-content-menu'>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
         </div>
        ))}
       </div>
      </div>
    </div>
  )
}

export default Home