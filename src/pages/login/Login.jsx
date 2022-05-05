import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PasswordInput, RegularTextInput } from "../../components";
import { useAuth } from "../../context";
import { handleLogin } from "../../context/auth-context/server-requests";

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

const ButtonOutlineWrapper = styled(Button)(() => ({
  "&:hover": {
    backgroundColor: "#396ff9",
    borderColor: "#396ff9",
  },
  color: "#fff",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#fff",
  height: "3rem",
  width: "100%",
  fontSize: "1rem",
  marginTop: "1rem",
}));

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

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const { authDispatch } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await handleLogin(data, authDispatch);
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
            Login
          </Typography>
          <Box component="form" width="35ch">
            <CustomFormControl>
              <RegularTextInput
                text={"Email"}
                name={"email"}
                value={data.email}
                handleChange={(e) => handleChange(e)}
              />
            </CustomFormControl>

            <CustomFormControl>
              <PasswordInput
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
                "Login"
              )}
            </ButtonWrapper>
            <ButtonOutlineWrapper
              onClick={() =>
                setData({
                  email: "hamza@kemmeltube.com",
                  password: "hamza49571",
                })
              }>
              Login as test user
            </ButtonOutlineWrapper>
          </Box>
        </Box>
      </Box>
    </main>
  );
};
