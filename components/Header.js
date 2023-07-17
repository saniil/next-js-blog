import Link from "next/link";
export default () => (
  <div>
    <div>
      LİNKLER:: <Link href={"/"}>Anasayfa</Link>
    </div>
    <div>
      <Link href={"/about"}>About</Link>
    </div>
  </div>
);
