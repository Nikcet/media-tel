export interface IAuthData {
  login: string;
  password: string;
}

export interface IComponent {
  component: any;
  isLoggedIn: boolean;
  path: string;
  cities?: string[];
  onLogin?: ({ login, password }: IAuthData) => void;
  updateUserData?: (object: any) => void;
  isNewUser?: boolean;
  onEditUser?: (user: IUser, isNewUser: boolean) => void;
  onAddUser?: (user: IUser, isNewUser: boolean) => void;
}

export interface IUser {
  _id: string;
  fio: string;
  cityId: {
    id: string;
    name: string;
  };
}

export interface IModalProps {
  visible: boolean;
  object: any;
  onClose: () => void;
  onDelete: (user: IUser) => void;
}