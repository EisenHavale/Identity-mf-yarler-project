import { ILoginFormValues } from "../interfaces/atoms-interfaces";

export const validate = (values:ILoginFormValues):ILoginFormValues => {
    const errors:ILoginFormValues = {
        username:'',
        password:''
    }
    console.log("Hello from validate");
    if (values){
        //username or phonenumber validation
        if(values.username.length == 0 || values.username == '' || values.username == null ){
            errors.username = 'Email or phoneNumber is required'
            console.log("Hello from validate and empty username");
        }else if(!values.username.match(/[a-zA-Z]/)){
            if(!values.username.match(/[0-9]\w{9}/)){
                errors.username = 'This phoneNumber is not valid, should be 10 digits long'       
            }
        }else if(!values.username.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            errors.username = 'This email is not valid, follow this example: username@example.com'       
        }
        //password validation
        if(values.password == null || values.password.length == 0 || values.password == ''){
            errors.password = 'Password is required';
        }
    }
    return errors
}