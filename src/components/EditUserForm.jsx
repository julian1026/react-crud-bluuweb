import React from 'react';
import {useForm} from 'react-hook-form'

const EditUserForm=(props)=>{


  // console.log(props.currentUser)
//obteniendo los datos para cargar en la cajas de entrada
const {register, errors, handleSubmit, setValue} = useForm({
    defaultValues: props.currentUser
});

setValue('name', props.currentUser.name)
setValue('username', props.currentUser.username)


   //en esta  parte acojo los datos modificados para enviarlos 
    const onSubmit=(data, e)=>{
       // console.log(data)
        data.id=props.currentUser.id
        props.updateUser(props.currentUser.id,data)
        //limpiar datos
        e.target.reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>name</label>
            <input type="text"
             name="name"
              ref={
                  register({
                      required:{value:true, message:'campo requerido'}
                  })
              }
             />
             <div> {errors?.name?.message} </div>
             
            <label>username</label>
            <input type="text" 
            name="username"
            ref={
                register({
                    required:{value:true, message:'campo requerido'}
                })
            }
             />
             <div>{errors?.username?.message}</div>
            <button>edit Users</button>
        </form>
    )
}
export default EditUserForm; 