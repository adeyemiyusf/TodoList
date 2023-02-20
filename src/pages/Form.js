import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Please Enter Your FullName"),
        userName: yup.string().required(),
        email: yup.string().required(),
        phoneNumber: yup.number().min(10).required(),
        password: yup.string().min(6).max(16).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],).required(),
    })
    
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) =>(
        console.log(data)
    );

    return (  
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='fullName' {...register("fullName")} /><br/><br/>
            <p className='error'>{errors.fullName?.message}</p>
            <input type="text" placeholder='userName'{...register('userName')} /><br/><br/>
            <p className='error'>{errors.userName?.message}</p>
            <input type="text" placeholder='Email' {...register('email')}/><br/><br/>
            <p className='error'>{errors.email?.message}</p>
            <input type="text" placeholder='Phone Number' {...register('phoneNumber')}/><br/><br/>
            <p className='error'>{errors.phoneNumber?.message}</p>
            <input type="text" placeholder='Password'{...register('password')}/><br/><br/>
            <p className='error'>{errors.password?.message}</p>
            <input type="text" placeholder='Confirm Password'{...register('confirmPassword')}/><br/><br/>
            <p className='error'>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
}
 
export default Form;