import classNames from "classnames";
import Typography from "./Typography";

function ProductCard({ courseType, courseName, courseDescription, courseDetail, courseDetail2, courseDate, courseMentor, coursePrice, children }) {
  return (
    
    <section className="w-[352px]">
      <div className="bg-[#152A46] flex flex-row rounded-t-[20px]">
        <img className="w-[75px] h-[135px] ml-[28px] mt-[16px]" src={"/assets/person.png"} />
        <div className="ml-[17px] mt-[27px]">
          <Typography weight={"bold"} size="normal" className="text-[#FFCD29]">
            {courseType}
          </Typography>
          <Typography weight={"bold"} size="lg" className="text-white mt-3">
            {courseName}
          </Typography>
          <Typography weight={"light"} size="xs" className="text-white">
            {courseDescription}
          </Typography>
          {children}
        </div>
      </div>
      <section className="w-[352px] bg-[#EFF4FA]">
        <div className="bg-[#ffffff] flex flex-row rounded-b-[20px] shadow-black shadow-sm">
          <div className="ml-[17px] mt-[27px]">
            <Typography weight={"bold"} size="lg" className="text-black">
              {courseDetail}
            </Typography>
            <Typography weight={"bold"} size="lg" className="text-black">
              {courseDetail2}
            </Typography>
            <Typography weight={"light"} size="xs" className="text-black mt-2">
              {courseDate}
            </Typography>
            <Typography weight={"light"} size="xs" className="text-black">
              {courseMentor}
            </Typography>
            <Typography weight={"bold"} size="lg" className="text-[#0ACF83] mt-2 mb-4 ml-[60%]">
              {coursePrice}
            </Typography>
            {children}
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProductCard;
