const UserValidation = (values) => {
  const errors = {};

  if (!values.firstName || values.firstName === "") {
    errors.firstName = "Nama depan Harus diisi";
  }

  if (!values.lastName || values.lastName === "") {
    errors.lastName = "Nama belakang Harus diisi";
  }

  if (!values.age || values.age === "") {
    errors.age = "Umur harus diisi";
  }

  return errors;
};

export default UserValidation;
