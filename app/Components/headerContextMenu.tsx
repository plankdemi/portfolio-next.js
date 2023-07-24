type ClickHandler = () => void;

export default function HeaderContextMenu(props: {
  clickHandler: ClickHandler;
}) {
  return (
    <ul className="content md:hidden" onClick={props.clickHandler}>
      <li className="border bg-slate-100 w-9 h-1 my-2 rounded-md"></li>
      <li className="border bg-slate-100 w-9 h-1 my-2 rounded-md"></li>
      <li className="border bg-slate-100 w-9 h-1 my-2 rounded-md"></li>
    </ul>
  );
}
