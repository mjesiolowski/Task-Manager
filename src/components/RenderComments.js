import React from 'react'
import Comment from './Comment'
import uuid from 'uuid'

const RenderComments = ({ task }) => {
   const sortComments = () => task.comments.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)

   const renderComments = () => sortComments().map((comment) =>
      <Comment
         key={uuid()}
         {...task}
         comment={comment}
      />)

   return (
      renderComments().length > 0 ? renderComments() : <p>No comments</p>
   )
}

export default RenderComments