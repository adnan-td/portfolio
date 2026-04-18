import { BiSolidUserCircle } from "react-icons/bi";

export default function StudioLogo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center text-2xl">
        <BiSolidUserCircle />
      </div>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
