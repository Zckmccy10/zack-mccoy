import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  return (
    <Link
      href="/"
      className="text-2xl flex w-min items-center gap-2 hover:text-brand"
    >
      <IoMdArrowRoundBack /> Back
    </Link>
  );
};

export default BackButton;
