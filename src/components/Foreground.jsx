import { useRef} from 'react';
import Cards from './Cards';

function foreground() {
  const ref = useRef(null);
  const data = [{
    desc: "This is a background colour of the card",
    size: ".9mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Downlod now", tagColor: "blue" },
  },
  {
    desc: "This is a background colour of the card",
    size: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Downlod now", tagColor: "green" },
  },
  {
    desc: "This is a background colour of the card",
    size: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "upload", tagColor: "green" },
  }];
  return (
    <div ref={ref} className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}

    </div>
  )
}

export default foreground;
