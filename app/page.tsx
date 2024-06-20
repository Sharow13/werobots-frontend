import SignInForm from "@/components/SignInForm";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-4">
      <SignInForm />
    </div>
  );
}
