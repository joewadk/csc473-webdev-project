import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser, UserButton, SignOutButton } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const VerifyBlackboard = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  console.log(user);

  const handleVerificiation = async (status) => {
    await user
      .update({
        unsafeMetadata: { status },
      })
      .then(() => {
        navigate("/courses");
      })
      .catch((error) => {
        console.error("Error validating", error);
      });
  };

  const handleDelete = async () => {
    await user
      .delete(user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting user", error);
      });
  };

  useEffect(() => {
    if (user.unsafeMetadata.role) {
      navigate("/courses");
    }
  }, [user]);

  if (!isLoaded) {
    console.log("verify")
    return (
      <div className="h-96 flex items-end">
        <BarLoader width={"100%"} color="#080808" />
      </div>
    );
  }

  return (
    <>
      <main className="flex min-h-screen justify-start items-center flex-col">
        <Card className="py-24 px-20 border-2 mt-[25vh] flex flex-col ">
          <div className="flex justify-center"></div>
          <div className="flex justify-center items-center pb-5">
            <div className="w-20 h-20">
              <img
                src={user?.imageUrl}
                alt="Profile picture"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <CardHeader>
            <CardTitle> Verify your CUNY account </CardTitle>
          </CardHeader>
          <div>
            <CardContent className="flex flex-col gap-4 pb-18">
              <Input type="text" placeholder="Email" className="flex-1" />
              <Input type="text" placeholder="Password" className="flex-1" />
            </CardContent>
            <div className="flex justify-center gap-7">
              <Button
                variant="outline"
                onClick={() => handleVerificiation("verified")}
                className="px-5"
              >
                Verify
              </Button>
              <Button
                variant="outline"
                onClick={() => handleDelete()}
                className="px-5"
              >
                Go back
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default VerifyBlackboard;
