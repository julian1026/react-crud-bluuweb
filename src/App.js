import React,{useState} from 'react'; 
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import { v4 as uuidv4 } from 'uuid'

function App() {
// lista para almacenar objetos
  const userDatos=[
    {id: uuidv4(), name: 'thalia', username:'thalia1212'},
    {id: uuidv4(), name: 'camila', username:'camila321@'},
    {id: uuidv4(), name: 'julian', username:'julian1212'}
  ]


  //  estamos pasando hooks state
  const [users, SetUsers]=useState(userDatos);

  // funcion para agregar usuario
 const addUser=(user)=>{
  user.id=uuidv4()
  SetUsers([
    ...users,
    user
  ])
 }

//eliminar usuarios
const deleteUser=(id)=>{

const arrayFiltrado=users.filter(user=>user.id !==id);
SetUsers(arrayFiltrado)
}
//editar usuario
const [Editing, SetEditing]=useState(false)

const inicial={ id:null, name:'', username:''}

const [currentUser, setCurrentUser]=useState(inicial);


const editRow=(user)=>{
  SetEditing(true)
  setCurrentUser({
    id:user.id, name:user.name, username:user.username
  })
}

// actualizar usuario

const updateUser=(id, updateUser)=>{
  SetEditing(false);

  SetUsers(users.map(user=>(user.id===id ? updateUser :user)))
}

  return (
    <div>
        <h2> crud  app with  hook </h2>
        <div className="flex-row">
          <div className="flex-large">

            {
              Editing?(
                <div> 
                  <h3>Edit User</h3>
                  <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                   />
                </div>
              ):(
              <div>
                <h3>Add User</h3>
                <AddUserForm addUser={addUser} />
              </div>
              )
            }
            
            
          </div>

          <div className="flex-large">
            <h2> view users</h2>
            {/* esta es la forma de pasar los props */}
            <UserTable
             users={users} 
             deleteUser={deleteUser}
             editRow={editRow}

             />
            
          </div> 

        </div>
    </div>
  );
}

export default App;
