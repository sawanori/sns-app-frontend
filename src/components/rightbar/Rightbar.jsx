import React from 'react'
import "./Rightbar.css"
import { Posts, Users } from '../../dummyData.js'
import { Online } from '../online/Online.jsx'

export const Rightbar = ({ profile }) => {
    const HomeRightbar = () => {
        return (
            <>
                <div className="eventContainer">
                    <img src="./assets/star.png" alt="" className="starImg" />
                    <span className='eventText'>
                        <b> Only followers</b>event Now!!
                    </span>
                </div>
                <img src="assets/event.jpeg" alt='' />
                <h4 className='rightbarTitle'>online rirends</h4>
                <ul className='rightbarFriendList'>
                    {Users.map((user) => (
                        <online user={user} key={user.id} />
                    ))}

                </ul>
                <p className='promotionTitle'>Promotion Ad</p>
                <img src="./assets/promotion/promotion1.jpeg" alt="" className="rightbarPromotionImg" />
                <p className='promotionName'>Shopping</p>
                <img src="./assets/promotion/promotion2.jpeg" alt="" className="rightbarPromotionImg" />
                <p className='promotionName'>Car</p>
                <img src="./assets/promotion/promotion3.jpeg" alt="" className="rightbarPromotionImg" />
                <p className='promotionName'>NORI INC</p>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>user information</h4>
                <div className='rightbarInfo'>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>born</span>
                        <span className='rightbarInfoKey'>hukuoka</span>
                    </div>
                    <h4 className='rightbarTitle'>Your Friend</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="assets/person/1.jpeg" alt="" className='rightbarFollowingImg' />
                            <span className='rightbarFollowingName'>Shin Code</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/2.jpeg" alt="" className='rightbarFollowingImg' />
                            <span className='rightbarFollowingName'>Shin Code</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/3.jpeg" alt="" className='rightbarFollowingImg' />
                            <span className='rightbarFollowingName'>Shin Code</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className='rightbarFollowingImg' />
                            <span className='rightbarFollowingName'>Shin Code</span>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
