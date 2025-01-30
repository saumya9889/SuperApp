import React, { useContext } from 'react'
import { NewsFeed } from '../../Component/NewsFeed';
import WeatherCard  from '../../Component/WeatherCard'; 
import { UserContext } from "../../Component/UserContext";
import { ProfileCard } from '../../Component/ProfileCard';



export const UserNote = () => {

      const { user, userSelect } = useContext(UserContext);

    console.log("UserNote - User Data:", user);
    console.log("UserNote - User Select Data:", userSelect);



  
  return (
    <>
     <div className='container'>
        <div className='user-note'>
            <div className='usernote-content-left'>
              <div className='usernote-content-left-top'>
                <div className='usernote-content-left-top-left'>
                <div className='profile-usernote'>
                  <ProfileCard/>
                  {/* <ProfileCard user={user} userSelect={userSelect} /> */}

                </div>
                <div className='weather-usernote'>
                  <WeatherCard />
                </div>
                </div>
                
              </div>
            </div>
            <div className='usernote-content-right'>
                <NewsFeed />
            </div>

        </div>
     </div>
    </>
  )
}
