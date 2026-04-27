"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    console.log(session);
    const user = session?.user;
//   const handleSignOut = () => {

    // authClient.signOut();
//   };
  return (
    <div className="border p-5 bg-zinc-700">
      <div className="flex gap-10 justify-center items-center text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/models"}>Models</Link>
        <Link href={"/server-action"}>Server Action</Link>
        <Link href={"/signup"}>Sign Up</Link>
        <Link href={"/signin"}>Sign In</Link>

        <div className="text-xs">{user?.name}</div>

        <Button onClick={() => authClient.signOut()} variant="danger">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
