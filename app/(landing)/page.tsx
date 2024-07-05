import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <Link href={"/sign-in"}>
        <Button>Login</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button>signUp</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
