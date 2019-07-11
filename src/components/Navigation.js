import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { setTextFilter, setSortBy } from '../actions/filters'

const Navigation = ({ dispatch }) => {
   const [filteredText, handleFilteredText] = useState("")
   const [sortBy, handleSortBy] = useState('createdAt')

   useEffect(() => {
      dispatchFilteredText("")
   }, [])

   const dispatchFilteredText = (value) => {
      handleFilteredText(value)
      dispatch(setTextFilter(value))
   }

   const dispatchSortBy = (e) => {
      handleSortBy(e.target.value)
      dispatch(setSortBy(e.target.value))
   }

   return (
      <section className="navigation">
         <input
            value={filteredText}
            onChange={(e) => dispatchFilteredText(e.target.value)}
            placeholder="Search task" />

         <label htmlFor='sortTasks'>Sort tasks by:</label>

         <select
            id='sortTasks'
            value={sortBy}
            onChange={(e) => dispatchSortBy(e)}
         >
            <option value="createdAt">Created at</option>
            <option value="name">Name</option>
            <option value="deadline">Deadline</option>
            <option value="priority">Priority</option>
         </select>

      </section >
   )
}

export default connect()(Navigation)