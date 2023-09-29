import { FC } from "react";
import RecoverPasswordForm from "../components/Form/Password/RecoverPasswordForm";
import LogUpImage from "../components/UI/logUpImage";
import useMediaQuery from "../hooks/use-media-query";

const RecoverPasswordPage:FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      {!isMobile && <LogUpImage />}
      <RecoverPasswordForm/>
    </>
  );
}

export default RecoverPasswordPage;
