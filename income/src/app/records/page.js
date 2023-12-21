import Header from "@/components/Header";
import Income from "@/components/records/Income";
import Records1 from "@/components/records/Records1";
import Records2 from "@/components/records/Records2";


export default function Home() {
  
  return (
    <>
      <Header />
      <div className="px-[120px] flex gap-[40px]">
        <Records1 />
        <Records2 />
      </div>
      <Income />
    </>
  );
}
