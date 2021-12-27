import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerInitate, setErrorEmpty } from "./redux/action";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "45ch",
        },
    },
}));

const Register = ({ setLogoutUser }) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(setErrorEmpty(error));
        if (user) {
            history.push("/");
        }
    }, [user]);

    const register = (e) => {
        e.preventDefault();
        dispatch(registerInitate(email, password));
        // axiox
        //   .post("http://localhost:5000/api/auth/register", {
        //     email,
        //     password,
        //   })
        //   .then((response) => {
        //     console.log("response", response);
        //     localStorage.setItem(
        //       "login",
        //       JSON.stringify({
        //         userLogin: true,
        //         token: response.data.access_token,
        //       })
        //     );
        //     setError("");
        //     setEmail("");
        //     setPassword("");
        //     setLogoutUser(false);
        //     history.push("/");
        //   })
        //   .catch((error) => setError(error.response.data.message));
    };
    return (
        <div style={{ marginTop: "100px" }}>
            <h2>Register Page</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={register}
            >
                <TextField
                    id="username"
                    label="Username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button
                    style={{ width: "100px" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Register
                </Button>
            </form>
            <p>
                Already have an account then please{" "}
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;
