import * as Yup from 'yup'
class Validators {
    static loginValidators() {
        return Yup.object().shape(
            {
                inputEmail: Yup.string().email('Not a valid email').required('Email is required'),
                inputPassword: Yup.string().required('Password is required')
            }
        )

    }
}
export default Validators;