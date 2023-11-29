import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Registre-se</h2>
                <span>Para utilizar nossos recursos</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Nome de Usuário' />
                    <input type="text" {...register("password")} placeholder='Senha' />
                    <input type="text" {...register("confirmpwd")} placeholder='Confirmar Senha' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Numero de Celular' />
                    {errors.mobile?.type === "required" && "Numero de Celular é necessário"}
                    {errors.mobile?.type === "maxLength" && "Limite de Caracteres excedido"}
                    <button className='btn'>Registrar</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
