import React from "react";
import "./Style.css";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const Login = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            {/* <head>
                <title>hello</title>
            </head>
            <div className="mainContainer">
                <h1 className="heading"> Login</h1>
                <div className="inputContainer">
                    <h4 className="inputLabel">User Name</h4>
                    <input className="input" type="text" />
                </div>
                <div className="inputContainer">
                    <h4 className="inputLabel">Password</h4>
                    <input className="input" type="password" maxLength={8} />
                </div>
                <div className="buttonContainer">
                    <button
                        className="button"
                        type="submit"

                        onClick={() => {
                            console.log("hello :>> ");
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div> */}

            <Controller
                name="firstName"
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }: any) => (
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="hello"
                    />
                )}
            />
            {errors.firstName && <p className="err">This is required.</p>}
            <input type="submit" onClick={handleSubmit(onSubmit)} />
        </>
    );
};

export default Login;
