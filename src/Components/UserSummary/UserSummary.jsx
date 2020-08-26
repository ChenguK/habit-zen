import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './UserSummary.css';
import todoService from '../../utils/todoService';
import habitService from '../../utils/habitService';
// import user from '../../../models/user';

class UserSummary extends Component {

  async componentDidMount() {
    const todos = await todoService.index();
    const habits = await habitService.index();
    this.props.handleUpdateTodos(todos);
    this.props.handleUpdateHabits(habits);
  }


handleDeleteToDo = async (todo) => {
  await todoService.deleteTodo(todo);
    const todos = await todoService.index();
    const habits = await habitService.index();
    this.props.handleUpdateTodos(todos);  
    this.props.handleUpdateHabits(habits);
}

handleEditToDo = async (todo) => {
  await todoService.deleteToDo(todo);
    const todos = await todoService.index();
    const habits = await habitService.index();
    this.props.handleUpdateTodos(todos);  
    this.props.handleUpdateHabits(habits);
}

handleDeleteHabit = async (habit) => {
  await habitService.deleteHabit(habit);
    const todos = await todoService.index();
    const habits = await habitService.index();
    this.props.handleUpdateTodos(todos);  
    this.props.handleUpdateHabits(habits);
}

handleUpdateHabit = async (habit) => {
let update = habit;
if(update.done) {
  update.done = false
}else{
  update.done = true
}
  await habitService.doneHabit(update);
    const habits = await habitService.index();
    this.props.handleUpdateHabits(habits);
}

handleUpdateToDo = async (todo) => {
let update = todo;
if(update.done) {
  update.done = false
}else{
  update.done = true
}
  await todoService.doneToDo(todo);
    const todos = await todoService.index();
    this.props.handleUpdateTodos(todos);  
}

  handleDeleteTodo = (todo) => {
    todoService.deleteTodo();
  }

  render() {
    const todoRows = this.props.todos.map((todo, idx) => (
     
      <ul> 
      <li className="ToDoList" key={idx}>
        
        <input type="checkbox" name="done" checked={todo.done} onChange={() => this.handleUpdateToDo(todo)}/>Done&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
        <button onClick={() => this.handleEditToDo(todo)}><span role="img" aria-label="edit">✏️</span></button>&nbsp;&nbsp;
        <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {todo.text}&nbsp;&nbsp;
        {todo.done}&nbsp;&nbsp;
      </li>
        </ul>
    ));
    const habitRows = this.props.habits.map((habit, idx) => (
      <ul> 
      <li className="HabitList" key={idx}>
      <input type="checkbox" name="done" checked={habit.done} onChange={() => this.handleUpdateHabit(habit)}/>Done&nbsp;&nbsp;
        <button onClick={() => this.handleDeleteHabit(habit)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
        <button onClick={() => this.handleEditHabit(habit)}><span role="img" aria-label="edit">✏️</span></button>&nbsp;&nbsp;
        <span className="badge">{idx + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {habit.habit}&nbsp;&nbsp;
      </li>
        </ul>
    ));

      const goalRows = this.props.habits.map((habit, idx) => (
        <tr key={idx}>
          <td><span className="badge">{idx + 1}</span></td>
          <td>{habit.goal}</td>
        </tr>

    ));
  return(
  <div>
    <h2> UserSummary </h2>
    <div id='ToDoList'>
        <header className='header-footer'>To Do List</header>
        <Link to="/newtodo">Add New To Do</Link>
        {this.props.todos.length ? 
       
            [todoRows] 
            : 
            <h5 className='text-info'>No To Do List Items Yet</h5>
          
             }
        </div>
    <br />
    <br />

    <div id='HabitList'>
        <header className='header-footer'>Habits</header>
        <Link to="/newhabit">Add New Goal</Link>
        {this.props.habits.length ? 
          [habitRows] 
          :
          <h5 className='text-info'>No Habits Yet</h5>
        }
        </div>
        <br />
        <br />
        <div id='GoalList'>
          <header className='header-footer'>Goals</header>
          {this.props.habits.length ?
            <table>
              <thead>
                <tr><th width={100}>Goals</th></tr>
              </thead>
              <tbody>

                {goalRows}
              </tbody>
            </table>
            :
            <h5 className='text-info'>No Goals Yet</h5>
          }
        </div>
        <br />
        <br />
      </div>

    );
  }
};


export default UserSummary;      
