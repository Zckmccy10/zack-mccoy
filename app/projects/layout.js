import Navbar from "../components/Navbar";

export const metadata = {
  title: "Zack McCoy | Projects",
  description: "Portfolio site for Zack McCoy web development projects",
};

export default function ProjectsLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
