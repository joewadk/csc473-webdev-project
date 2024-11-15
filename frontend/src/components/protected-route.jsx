import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/?sign-in=true");
    }
    if (isSignedIn && !user?.unsafeMetadata?.status) {
      navigate("/blackboard-verification");
    }
    if (isSignedIn && user.unsafeMetadata.status) {
      navigate("/courses");
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}

export default ProtectedRoute;
