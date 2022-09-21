import { MoreVert } from '@mui/icons-material'
import React,{useState} from 'react'
import './Post.css'
import {Users} from '../../dummyData'

export const Post = ({post}) => {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className='postTop'>
          <div className="postTopLeft">
            <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} className='postProfileImg' />
            <span className='postUsername'>
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc} </span>
          <img src={post.photo} className="postImg" />
        </div>
        <div className="postBotttom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" className="likeIcon" onClick={() => {handleLike()}}/>
            <span className="postLikeCounter">
              {like} people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">
             {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

