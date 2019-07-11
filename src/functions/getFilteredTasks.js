export const getFilteredTasks = (tasks, { filteredText, sortBy }) => {

   const filteredTasks = tasks
      .filter((task) => task.name.toLowerCase().includes(filteredText.toLowerCase()) && task.active)
      .sort((a, b) => {

         switch (sortBy) {
            case 'createdAt':
               return a.createdAt > b.createdAt ? -1 : 1
            case 'deadline':
               return a.deadline > b.deadline ? 1 : -1
            case 'name':
               return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
         }
      })
   console.log(filteredTasks)
   return filteredTasks
}