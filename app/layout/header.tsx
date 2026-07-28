export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center sticky top-1 z-100">
        <div className="m-5 mb-0 rounded-full p-3 flex justify-center bg-white/10 backdrop-blur-md border-white/20 shadow-xl gap-5">
          <button className="cursor-pointer">Home</button>
          <button className="cursor-pointer">Projects</button>
          <button className="cursor-pointer">Contact</button>
        </div>
      </div>
    </>
  );
}
