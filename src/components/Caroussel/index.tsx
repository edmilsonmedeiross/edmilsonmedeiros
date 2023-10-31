import React, { ReactElement, useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useScreenSize from "@/helpers/hooks/useScreenSize";

interface CarousselProps {
  cards: ReactElement[];
}

const Caroussel: React.FC<CarousselProps> = ({ cards }) => {
  const carouselRef = useRef<any>(null);
  const { width } = useScreenSize();

  const next = () => {
    carouselRef.current?.next();
  };

  const prev = () => {
    carouselRef.current?.prev();
  };

  const handleSlidesToShow = () => {
    if (width < 650) {
      return 1;
    } else {
      return 2;
    }
  };

  return (
    <div className="border-2 p-3 border-violet-700 flex items-center justify-between ">
      <Button
        className="w-1/5"
        type="primary"
        icon={<LeftOutlined />}
        onClick={prev}
      />
      <div className="relative flex-grow mx-auto w-1/2 max-md:max-w-xl max-sm:mx-auto max-sm:w-72">
        <div className="border-2 border-green-400  w-4/5 mx-auto max-md:w-4/5">
          <Carousel
            ref={carouselRef}
            slidesToShow={handleSlidesToShow()}
            autoplay={true}
          >
            {cards.map((card) => (
              <div key={card.key} className="w-full">
                {card}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Button
        className="w-1/5"
        type="primary"
        icon={<RightOutlined />}
        onClick={next}
      />
    </div>
  );
};

export default Caroussel;
