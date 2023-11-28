const todoList = () => {
    const all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => !item.completed && item.dueDate < today);
    };
  
    const dueToday = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => item.dueDate === today);
    };
  
    const dueLater = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => !item.completed && item.dueDate > today);
    };
  
    const toDisplayableList = (list) => {
      return list
        .map((item) => {
          let checkbox = item.completed ? "[x]" : "[ ]";
          const formattedDate =
            item.dueDate !== new Date().toISOString().split("T")[0]
              ? " " + item.dueDate
              : "";
          return `${checkbox} ${item.title}${formattedDate}`;
        })
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;