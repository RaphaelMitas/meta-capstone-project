import React from "react";
import { Formik, Field, Form } from "formik";
import {
  TextField,
  Snackbar,
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
  Select,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  ButtonGroup,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const steps = ["Booking Information", "Contact Information", "Summary"];

function BookingForm({
  activeStep,
  setActiveStep,
  availableTimes,
  updateTimes,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSubmit = (
    values,
    { setSubmitting, setTouched, validateForm }
  ) => {
    handleNext(validateForm, setTouched, setSubmitting);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = async (validateForm, setTouched, setSubmitting) => {
    const errors = await validateForm();
    if (activeStep === 0) {
      // check for errors in booking information
      if (errors.date || errors.time || errors.guests) {
        setTouched({
          date: true,
          time: true,
          guests: true,
        });
      } else {
        setActiveStep(1);
      }
    } else if (activeStep === 1) {
      // check for errors in contact information
      if (errors.firstName || errors.lastName || errors.email || errors.phone) {
        setTouched({
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
        });
      } else {
        setActiveStep(2);
      }
    } else if (activeStep === steps.length - 1) {
      if (
        errors.date ||
        errors.time ||
        errors.guests ||
        errors.firstName ||
        errors.lastName ||
        errors.email ||
        errors.phone
      ) {
        setTouched({
          date: true,
          time: true,
          guests: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
        });
      } else {
        setSubmitting(true);
        // submit form

        // simulate submission after 2 seconds
        setTimeout(() => {
          // for now always redirect to confirmation page
          window.location.href = "/confirmation";

          // randomly redirect to confirmation page or show error
          // if (Math.random() < 0.5) {
          //   window.location.href = "/confirmation";
          // } else {
          //   setOpenSnackbar(true);
          // }
          setSubmitting(false);
        }, 2000);
      }
    }
  };

  return (
    <Grid
      container
      sx={{
        p: theme.spacing(2),
        flexGrow: 1,
      }}
    >
      <Grid item xs={false} sm={1} md={2} />
      <Grid item xs={12} sm={10} md={8}>
        <Formik
          initialValues={{
            date: "",
            time: "",
            guests: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          }}
          validate={(values) => {
            const errors = {};

            // Validate booking information
            // Validate date
            if (!values.date) {
              errors.date = "Required";
            } else if (!values.date.isValid()) {
              errors.date = "Invalid date";
            } else if (dayjs(values.date).isBefore(dayjs())) {
              errors.date = "Date must be in the future";
            }

            // Validate time
            if (!values.time) {
              errors.time = "Required";
            } else if (!values.time.isValid()) {
              errors.time = "Invalid time";
            }

            // Validate number of guests
            if (!values.guests) {
              errors.guests = "Required";
            } else if (values.guests < 1 || values.guests > 10) {
              errors.guests = "Guests must be between 1 and 10";
            }

            // Validate contact information
            // Validate first name
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            // Validate last name
            if (!values.lastName) {
              errors.lastName = "Required";
            }
            // Validate email
            if (!values.email) {
              errors.email = "Required";
            } else if (!values.email.includes("@")) {
              errors.email = "Invalid email";
            }
            // Validate phone
            if (!values.phone) {
            } else if (
              !values.phone.match(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
              )
            ) {
              errors.phone = "Invalid phone number";
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            setSubmitting,
            values,
            setFieldValue,
            errors,
            setErrors,
            touched,
            setTouched,
            validateForm,
          }) => (
            <Box
              component={Form}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                gap: theme.spacing(2),
              }}
            >
              <Stepper activeStep={activeStep} alternativeLabel={isMobile}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Grid container spacing={2}>
                {activeStep === 0 && (
                  <>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date*"
                          value={values.date}
                          sx={{ width: "100%" }}
                          onChange={(newValue) => {
                            setFieldValue("date", newValue);
                            updateTimes({ type: "UPDATE_TIMES" });
                          }}
                          onError={(newError) => setErrors("date", newError)}
                          dateFormat="MM/DD/YYYY"
                          disablePast
                          slotProps={{
                            textField: {
                              helperText: errors.date,
                              error: touched.date && Boolean(errors.date),
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl
                        disabled={!availableTimes || availableTimes.length < 1}
                        fullWidth
                        error={touched.time && Boolean(errors.time)}
                      >
                        <InputLabel id="select-time-label">
                          Time*{" "}
                          {(!availableTimes || availableTimes.length < 1) &&
                            "(select date first!)"}
                        </InputLabel>
                        <Field
                          labelId="select-time-label"
                          component={Select}
                          name="time"
                          label="Time*"
                          value={values.time}
                          aria-label="Select Time"
                          onChange={(event) => {
                            setFieldValue("time", event.target.value);
                          }}
                        >
                          {availableTimes.map((time) => (
                            <MenuItem
                              key={time.time.format("HH:mm")}
                              value={time.time}
                              disabled={!time.available}
                              aria-label={
                                "Select Time: " + time.time.format("HH:mm")
                              }
                            >
                              {time.time.format("HH:mm")}
                            </MenuItem>
                          ))}
                        </Field>
                        {touched.time && errors.time && (
                          <FormHelperText>{errors.time}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        error={touched.guests && Boolean(errors.guests)}
                      >
                        <InputLabel id="select-guests-label">
                          Number of Guests*
                        </InputLabel>
                        <Field
                          labelId="select-guests-label"
                          component={Select}
                          name="guests"
                          label="Number of Guests*"
                          value={values.guests}
                          aria-label="Select Number of Guests"
                          onChange={(event) => {
                            setFieldValue("guests", event.target.value);
                          }}
                        >
                          {[...Array(10).keys()].map((value) => (
                            <MenuItem
                              key={value + 1}
                              value={value + 1}
                              aria-label={
                                "Select Number of Guests: " + (value + 1)
                              }
                            >
                              {value + 1}
                            </MenuItem>
                          ))}
                        </Field>
                        {touched.guests && errors.guests && (
                          <FormHelperText>{errors.guests}</FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        autoComplete="given-name"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        id="firstName"
                        label="First Name*"
                        aria-label="First Name Input"
                        autoFocus
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        value={values.firstName}
                        onChange={(event) => {
                          setFieldValue("firstName", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        fullWidth
                        id="lastName"
                        label="Last Name*"
                        aria-label="Last Name Input"
                        name="lastName"
                        autoComplete="family-name"
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        value={values.lastName}
                        onChange={(event) => {
                          setFieldValue("lastName", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        fullWidth
                        id="email"
                        label="Email Address*"
                        aria-label="Email Address Input"
                        name="email"
                        autoComplete="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        value={values.email}
                        onChange={(event) => {
                          setFieldValue("email", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        variant="outlined"
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        aria-label="Phone Number Input"
                        type="phone"
                        id="phone"
                        autoComplete="tel"
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        value={values.phone}
                        onChange={(event) => {
                          setFieldValue("phone", event.target.value);
                        }}
                      />
                    </Grid>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    {/* Summary */}

                    <Grid item xs={10}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        aria-label="Booking Summary Heading"
                      >
                        Booking Information
                      </Typography>
                      {Boolean(errors.date) || Boolean(errors.time) ? (
                        <>
                          <Typography
                            variant="body1"
                            gutterBottom
                            color={Boolean(errors.date) && "error"}
                          >
                            Date:{" "}
                            {Boolean(errors.date)
                              ? errors.date
                              : values.date.format("MMMM D, YYYY")}
                          </Typography>

                          <Typography
                            variant="body1"
                            gutterBottom
                            color={Boolean(errors.time) && "error"}
                          >
                            Time:{" "}
                            {Boolean(errors.time)
                              ? errors.time
                              : values.time.format("HH:mm")}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography variant="body1" gutterBottom>
                            Date and Time: {values.date.format("MMMM D, YYYY")}
                            {" at "}
                            {values.time.format("HH:mm")}
                          </Typography>
                        </>
                      )}

                      {Boolean(errors.guests) ? (
                        <Typography variant="body1" gutterBottom color="error">
                          Number of Guests: {errors.guests}
                        </Typography>
                      ) : (
                        <Typography variant="body1" gutterBottom>
                          Number of Guests: {values.guests}
                        </Typography>
                      )}

                      <Typography
                        variant="h6"
                        gutterBottom
                        aria-label="Contact Information Heading"
                      >
                        Contact Information
                      </Typography>

                      {Boolean(errors.firstName) || Boolean(errors.lastName) ? (
                        <>
                          <Typography
                            variant="body1"
                            gutterBottom
                            color={Boolean(errors.firstName) && "error"}
                          >
                            First Name:{" "}
                            {Boolean(errors.firstName)
                              ? errors.firstName
                              : values.firstName}
                          </Typography>

                          <Typography
                            variant="body1"
                            gutterBottom
                            color={Boolean(errors.lastName) && "error"}
                          >
                            Last Name:{" "}
                            {Boolean(errors.lastName)
                              ? errors.lastName
                              : values.lastName}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography variant="body1" gutterBottom>
                            Name: {values.firstName} {values.lastName}
                          </Typography>
                        </>
                      )}

                      {Boolean(errors.email) ? (
                        <>
                          <Typography
                            variant="body1"
                            gutterBottom
                            color="error"
                          >
                            Email: {errors.email}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography variant="body1" gutterBottom>
                            Email: {values.email}
                          </Typography>
                        </>
                      )}

                      {Boolean(errors.phone) ? (
                        <>
                          <Typography
                            variant="body1"
                            gutterBottom
                            color="error"
                          >
                            Phone: {errors.phone}
                          </Typography>
                        </>
                      ) : (
                        <>
                          {values.phone && (
                            <Typography variant="body1" gutterBottom>
                              Phone: {values.phone}
                            </Typography>
                          )}
                        </>
                      )}
                    </Grid>
                  </>
                )}
              </Grid>

              <ButtonGroup
                color="primary"
                aria-label="contained primary button group"
                fullWidth
              >
                <Button
                  disabled={activeStep === 0 || isSubmitting}
                  onClick={handleBack}
                  aria-label="Back Button"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    handleNext(validateForm, setTouched, setSubmitting)
                  }
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} />
                  ) : activeStep === steps.length - 1 ? (
                    "Confirm"
                  ) : (
                    "Next"
                  )}
                </Button>
              </ButtonGroup>
            </Box>
          )}
        </Formik>
      </Grid>
      <Grid item xs={false} sm={1} md={2} />

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={() => setOpenSnackbar(false)}
        >
          There was an error with the submission. Please try again.
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default BookingForm;
