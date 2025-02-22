
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={0.1}
      whileDrag={{ scale: 1.05 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className=" relative flex-shrink-0 px-5 py-10 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.size || "0.0 mb"}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>{data.close ? <IoMdClose size=".7em" color='#fff' /> : <IoMdDownload size=".7em" color='#fff' />}</span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>

        )}
      </div>
    </motion.div >
  );
};

Cards.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    close: PropTypes.bool.isRequired,
    tag: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      tagColor: PropTypes.oneOf(['blue', 'green']).isRequired,
      tagTitle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  reference: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
};
export default Cards;
