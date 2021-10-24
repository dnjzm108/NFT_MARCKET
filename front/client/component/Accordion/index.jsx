import Link from "next/link";
import { AccordionMenu } from "./Accordion.css";

const Accordion = ({ visible, handleToggle }) => {
  // const menu = useSelector((state)=>state.category.menu)

  const handleClick = () => {
    handleToggle();
  };

  // const category = menu.map((v)=>{
  //   return <li key={v.id} onClick={handleClick}><Link href={v.url}><a>{v.category}</a></Link></li>
  // })

  return (
    <AccordionMenu flag={visible}>
      <ul>{/* {category} */}</ul>
    </AccordionMenu>
  );
};

export default Accordion;
