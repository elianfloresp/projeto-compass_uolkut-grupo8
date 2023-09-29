import { FC } from "react";
import FormChangePassword from "../components/Form/Password/FormChangePassword";
import LogUpImage from "../components/UI/logUpImage";
import useMediaQuery from "../hooks/use-media-query";

const ChangePasswordPage:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {!isMobile && <LogUpImage />}
      <FormChangePassword/>
    </>
  );
}

export default ChangePasswordPage;
