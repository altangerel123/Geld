import Frame2 from "../dashboard/Frame2";
import Frame1 from "../dashboard/Frame1";

export default function Dashboard2() {
  return (
    <div className="w-full flex px-[120px] py-[35px] gap-[35px]">
      <div className="w-1/2">
        <Frame1 />
      </div>
      <div className="w-1/2">
        <Frame2 />
      </div>
    </div>
  );
}
