import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PasswordInput, RegularTextInput } from "../../components";
import { useAuth } from "../../context";
import { handleSignUp } from "../../context/auth-context/server-requests";

const CustomFormControl = styled(FormControl)({
  variant: "outlined",
  width: "100%",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },

  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

const ButtonWrapper = styled(Button)(() => ({
  "&:hover": {
    color: "#396ff9",
  },
  borderColor: "#396ff9",
  backgroundColor: "#396ff9",
  color: "#fff",
  borderWidth: "1px",
  borderStyle: "solid",
  height: "3rem",
  width: "100%",
  fontSize: "1rem",
  marginTop: "1rem",
}));

export const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstNameError: false,
    emailError: false,
    passwordError: false,
  });

  const { authDispatch } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [`${name}Error`]: false }));
  };

  const handleErrors = () => {
    if (data.firstName.length < 6) {
      setErrors((prev) => ({ ...prev, firstNameError: true }));
    } else if (!data.email.includes("@")) {
      setErrors((prev) => ({ ...prev, emailError: true }));
    } else if (data.password.length < 6) {
      setErrors((prev) => ({ ...prev, passwordError: true }));
    } else {
      return true;
    }

    return false;
  };

  const handleSubmit = async () => {
    if (!handleErrors()) return;
    setLoading(true);
    try {
      await handleSignUp(data, authDispatch);
      navigate(location?.state?.from?.pathname || "/", {
        replace: true,
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="wrapper">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <Box
          component="div"
          sx={{
            border: "2px solid #373c43 ",
            p: {
              xs: 2,
              sm: 5,
            },
          }}>
          <Typography
            color="#fff"
            fontWeight={500}
            fontSize="1.5rem"
            variant="h3"
            component="div">
            Signup
          </Typography>
          <Box component="form" width="35ch">
            <Grid container justifyContent={"space-between"}>
              <Grid item xs={12} sm={5}>
                <CustomFormControl>
                  <RegularTextInput
                    required={true}
                    error={errors.firstNameError}
                    text={"First Name"}
                    name={"firstName"}
                    value={data.firstName}
                    handleChange={(e) => handleChange(e)}
                  />
                </CustomFormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <CustomFormControl>
                  <RegularTextInput
                    required={false}
                    text={"Last Name"}
                    name={"lastName"}
                    value={data.lastName}
                    handleChange={(e) => handleChange(e)}
                  />
                </CustomFormControl>
              </Grid>
            </Grid>

            <CustomFormControl>
              <RegularTextInput
                required={true}
                error={errors.emailError}
                text={"Email"}
                name={"email"}
                value={data.email}
                handleChange={(e) => handleChange(e)}
              />
            </CustomFormControl>

            <CustomFormControl>
              <PasswordInput
                required={true}
                error={errors.passwordError}
                text={"Password"}
                name={"password"}
                value={data.password}
                handleChange={(e) => handleChange(e)}
              />
            </CustomFormControl>
          </Box>

          <Box component="div" width="35ch">
            <ButtonWrapper onClick={() => handleSubmit()}>
              {loading ? (
                <CircularProgress
                  size={30}
                  thickness={5}
                  sx={{ color: "#396ff9" }}
                />
              ) : (
                "Create account"
              )}
            </ButtonWrapper>
          </Box>
          <Box mt={2} component="div">
            <Typography
              color="#fff"
              fontWeight={400}
              fontSize="1.1rem"
              width="fit-content"
              mx="auto"
              variant="subtitle1"
              component="p"
              gutterBottom>
              Already have an account?
            </Typography>
            <Typography
              color="#396ff9"
              fontWeight={400}
              fontSize="1.1rem"
              width="fit-content"
              variant="subtitle1"
              mx="auto"
              component={Link}
              to="/login"
              gutterBottom
              sx={{ textDecoration: "underline", marginLeft: "40%" }}>
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
};
