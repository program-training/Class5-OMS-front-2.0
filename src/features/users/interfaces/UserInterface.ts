interface UserInterface {
  _id?: string;
  email: string;
  password: string;
  isadmin?: boolean;
  exp?: string;
  iat?: string;
}

export default UserInterface;
