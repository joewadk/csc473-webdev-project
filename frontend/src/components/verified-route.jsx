import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifiedRoute({ children }) {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/?sign-in=true");
    }
    if (!user?.unsafeMetadata?.status) {
      navigate("/?sign-in=true");
    }
    if (isSignedIn && !user?.unsafeMetadata?.status) {
      navigate("/blackboard-verification");
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}

export default VerifiedRoute;
