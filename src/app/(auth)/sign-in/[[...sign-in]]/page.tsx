import { SignIn } from "@clerk/nextjs";
function Signin() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
        <SignIn/>
    </main>

  )
}

export default Signin;