import { FC } from "react";
import ChangePasswordForm from "../components/Form/ChangePasswordForm";
import LogUpImage from "../components/UI/logUpImage";
import useMediaQuery from "../hooks/use-media-query";

const ChangePasswordPage:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {!isMobile && <LogUpImage />}
      <ChangePasswordForm/>
    </>
  );
}

export default ChangePasswordPage;
