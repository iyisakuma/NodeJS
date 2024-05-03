const schema = {
  name: "select",
  description: "1 - QRCode\n 2 - Password",
  pattern: /^[1-2]+$/,
  message: "Escolha apenas entre 1 e 2",
  required: true,
};
