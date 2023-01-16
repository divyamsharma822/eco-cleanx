import React from "react";
import styles from "./ContactUs.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
    
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            description: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            phone: Yup.string()
                .required("Required")
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, "Must be exactly 10 digits")
                .max(10, "Must be exactly 10 digits"),
            description: Yup.string().required("Required"),
        }),
    });

    return (
        <div className={styles.ContactUs}>
            <div className={styles.centerContent}>
                <form
                    // onSubmit={formik.handleSubmit}
                    action='https://formsubmit.co/divyamsharma822@gmail.com'
                    method='POST'
                >
                    <div className={styles.heading}>Submit your details.</div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        id='fullName'
                        name='fullName'
                        type='text'
                        placeholder='Enter Your full Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                        <div className={styles.error}>
                            {formik.errors.fullName}
                        </div>
                    ) : null}

                    <label htmlFor='email'>E-mail Address</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter Your Email Address'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={styles.error}>
                            {formik.errors.email}
                        </div>
                    ) : null}

                    <label htmlFor='phone'>Phone Number</label>
                    <input
                        id='phone'
                        name='phone'
                        type='number'
                        placeholder='Enter Your Phone no.'
                        min={0}
                        minLength={10}
                        maxLength={10}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className={styles.error}>
                            {formik.errors.phone}
                        </div>
                    ) : null}

                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        name='description'
                        placeholder='Write about your query.'
                        type='text'
                        rows='4'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className={styles.error}>
                            {formik.errors.description}
                        </div>
                    ) : null}
                    <button type='submit' className={styles.submitBtn}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
