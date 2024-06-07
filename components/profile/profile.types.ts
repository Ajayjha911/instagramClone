import { UserState } from "@redux/slices/appSlice";

export declare type ProfilePageProps = {
  isMyAccount: boolean;
  activeUser: UserState;
  handleBack?: () => void;
};
