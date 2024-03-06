import React from 'react'
import Video from './Video'
// import HomeDashboard from './HomeDashboard'
// import Upload from './Upload'

function Dashboard() {
  return (
    <div className='flex flex-row bg-purple-950 w-100 '>
        <div className="commandmenu h-full flex flex-col  bg-purple-900 w-40 pl-4 pt-4 pb-20 mt-4 border-none rounded-xl">
            <div className="logo">Content Cloud</div>
            <div className='main flex flex-col pt-12 text-white'>Main
            <div className="pl-4 pt-4 text-yellow-50">DashBoard</div>
            <div className="pl-4 pt-4 text-yellow-50">Inbox</div>
            <div className="pl-4 pt-4 text-yellow-50">Upload</div>
            <div className="pl-4 pt-4 text-yellow-50">Videos</div>
            <div className="pl-4 pt-4 text-yellow-50">Reels</div>
            <div className="pl-4 pt-4 text-yellow-50">Posts</div>
            <div className="pl-4 pt-4 text-yellow-50">Blogs</div>
            </div>
            <div className='main flex flex-col pt-12  text-white'>Help
            <div className="pl-4 pt-4 text-white">Setting</div>
            <div className="pl-4 pt-4 text-white">Support</div>
            <div className="pl-4 pt-4 text-white">Logout</div>
            </div>
        </div>
        {/* <HomeDashboard/> */}
        {/* <Upload/> */}
        <Video/>
    </div>
  )
}

export default Dashboard