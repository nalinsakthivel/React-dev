import React, { useState } from "react";
import "./Style.css";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/material";

const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            password: "",
        },
    });
    const onSubmit = (data: any) => {
        setLoading(true);
        console.log({ data });
        setLoading(false);
    };
    return (
        <>
            <Container>
                <div className="input">
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({
                            field: { onChange, onBlur, value, name },
                        }) => (
                            <TextField
                                id={name}
                                label="Name"
                                variant="outlined"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Name"
                            />
                        )}
                    />
                    {errors.firstName && (
                        <p className="err">This is required.</p>
                    )}
                </div>
                <div className="input">
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({
                            field: { onChange, onBlur, value, name },
                        }) => (
                            <TextField
                                id={name}
                                label="Password"
                                variant="outlined"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Password"
                                type="password"
                            />
                        )}
                    />
                    {errors.firstName && (
                        <p className="err">This is required.</p>
                    )}
                </div>
                <div className="input">
                    <LoadingButton
                        size="small"
                        onClick={handleSubmit(onSubmit)}
                        loading={loading}
                        variant="contained"
                    >
                        <span>Submit</span>
                    </LoadingButton>
                </div>
            </Container>
        </>
    );
};

export default Login;
