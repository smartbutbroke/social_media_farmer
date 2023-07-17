import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/birthday.jpg" alt="" />
          <span className="birthdayText">
            <b>Kirtan Jadhav</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="put ad here." />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className="rightbarTitle">UserInformation</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Ahmedabad</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Realtionship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">UserFriends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/arjun_photo.jpg" alt="" />
          <span className="rightbarFollowingName">kirtan Jadhav</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar />: <HomeRightbar />}
      </div>
    </div>
  )
}
