import { UserState } from "@redux/slices/appSlice";
import { PostType } from "@redux/slices/postSlices";

export declare type PostDetailsProps = {
  activeUser: UserState;
  activePosts: PostType[];
  handleBack: () => void;
};
