import { useFormik } from "formik";
import * as yup from "yup";

const emailSchema = yup.object().shape({
    email: yup.string().email().required(),
});

export const useSignupForm = () => {
    const signupForm = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: emailSchema,
        onSubmit: (values) => {
            window.open(`https://app.loch.one/welcome?user=${values.email}`, "_blank");
        },
    });

    return signupForm;
};
