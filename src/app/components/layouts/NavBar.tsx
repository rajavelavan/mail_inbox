'use client';
import ThemeToggle from '../ThemeToggle';
export default function Navbar() {
  return (
    <div className="flex h-20 items-center dark:bg-medium justify-between border-b-2">
      <div className="flex items-center justify-between rounded p-3">
        <h1 className="font-bold dark:text-white pl-6">OneBox</h1>
      </div>
      <div className="flex items-center justify-between p-5 gap-10 rounded">
        <div className="flex items-center">
          <ThemeToggle />
        </div>
        <div className="flex text-md rounded dark:text-white">Name</div>
      </div>
    </div>
  );
}
