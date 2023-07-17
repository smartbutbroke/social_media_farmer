import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useEffect,useState } from "react"
import axios from "axios"

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(()=>{
        const fetchUser = async () => {
          const res = await axios.get(`users/${post.userId}`)
          setUser(res.data);
        }
        fetchUser();
      },[]);

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user.profilePicture || PF+"noavatar.jpg"} alt="" />
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className="postImg" src={PF+post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className="heartIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
