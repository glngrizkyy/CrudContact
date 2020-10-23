const UserValidation = (values) => {
  const errors = {};

  if (!values.firstName || values.firstName === "") {
    errors.firstName = "Nama depan harus diisi";
  }

  if (!values.lastName || values.lastName === "") {
    errors.lastName = "Nama Belakang harus diisi";
  }

  if (!values.age || values.age === "") {
    errors.age = "Umur harus diisi";
  }

  return errors;
};

export default UserValidation;
