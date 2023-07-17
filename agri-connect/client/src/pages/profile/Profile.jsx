import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="assets/post1.png" alt="" />
                    <img className="profileUserImg" src="assets/arjun_photo.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Arjun Khare</h4>
                    <span className="profileInfoDesc">Arjun Khare's Profile description</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
