import React from 'react'
import { NewsFeed } from '../../Component/NewsFeed'

export const UserNote = () => {
  return (
    <>
     <div className='container'>
        <div className='user-note'>
            <div className='usernote-content-left'></div>
            <div className='usernote-content-right'>
                <NewsFeed />
            </div>

        </div>
     </div>
    </>
  )
}
