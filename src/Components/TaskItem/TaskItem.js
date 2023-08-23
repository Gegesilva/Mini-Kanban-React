import React, { useState } from "react";
import Proptypes from "prop-types";
import "./TaskItem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  ondeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEdutableTitle] = useState(title);

  const onTiltleChange = (event) => {
    const newTitle = event.target.value;
    setEdutableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        ondeleteTask(id);
      }
    }
  };

  const onTsakStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTiltleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTsakStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completo">Completo</option>
        </select>
      </div>
    );
  }
}

TaskItem.Proptypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  taskState: Proptypes.string.isRequired
};
