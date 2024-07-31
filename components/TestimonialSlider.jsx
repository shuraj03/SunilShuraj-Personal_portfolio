import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  
  {
    image: "/harishMpic.png",
    name: "Harish M",
    position: "First Friend",
    message:
    "Sunil Shuraj(@smileyboy)is an incredibly good-hearted person who always puts others first. Despite being an overthinker, his attention to detail is unmatched, ensuring everything is done perfectly. He is very friendly and approachable, making everyone feel comfortable. Although he can show more anger at times, it's only because he cares deeply about his work and the people around him. I'm excited to see all the great things he will accomplish in the future!"
  },
  {
    image: "/kisspic.png",
    name: "Kishore D",
    position: "Presentation Coach",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/manojpic.png",
    name: "Manoj K",
    position: "Support System",
    message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-1.jpeg",
    name: "Kanishk P",
    position: "Friend",
    message:
        "Working with Shuraj has been a delightful experience. As a beginner, Shuraj shows remarkable enthusiasm and a keen willingness to learn. Their dedication to improving their skills and delivering quality work is truly commendable. I am excited to see how they will continue to grow and succeed in their future projects",
  },
  {
    image: "/adipic.png",
    name: "G Adithya Subramanian",
    position: "Friend",
    message:
        "Working with Sunil has been a wonderful experience. Despite being a student, he is incredibly talented and dedicated to his work. He always goes the extra mile to ensure everything is perfect. I am excited to see all the amazing achievements he will accomplish in the future!",
  },
  {
    image: "/hitpic.png",
    name: "Hitesh Raj R",
    position: "Team Lead",
    message:
        "I loved the work done and the unique, innovative way of thinking. This approach made our tasks easier to complete and more efficient. The creativity and dedication demonstrated were invaluable to our success. The contributions are highly commendable, and I highly recommend for the outstanding work ethic and innovative mindset.",
  },
  {
    image: "/mahapic.png",
    name: "Mahalakshmi PC",
    position: "Friend",
    message:
        "He was Very nice and kind. He is very desperate to complete the work on time without any delays",
  },
  {
    image: "/benpic.png",
    name: "Benicia A",
    position: "Friend",
    message:
        "He was Very nice and kind. He is very desperate to complete the work on time without any delays",
  },
  {
    image: "/sripic.png",
    name: "Sri Balaji S",
    position: "Friend",
    message:
        "He was Very nice and kind. He is very desperate to complete the work on time without any delays",
  },

  {
    image: "/rekhapic.png",
    name: "Rekha G",
    position: "Protector",
    message:
        "He is someone who never leaves his colleagues alone in difficult situations, always standing by them even when they don’t realize they need his support. His unwavering dedication and teamwork make him a valuable team player. His presence brings confidence and a sense of unity to the team.",
  },
  {
    image: "/shivapic.png",
    name: "Shiva A",
    position: "Friend",
    message:
        "He was Very nice and kind. He is very desperate to complete the work on time without any delays",
  },

  {
    image: "/t-avt-3.png",
    name: "Harish S",
    position: "Friend",
    message:
        "I've had the pleasure of working with Sunil Shuraj, and I can confidently attest to his exceptional talent and dedication to AI and Immersive Engineering. Throughout our collaboration, I've witnessed firsthand his leadership skills, passion for innovation, and gift for bringing people together to achieve a common goal. His expertise and enthusiasm are contagious, making him an invaluable asset to any team.",
  },

  {
    image: "/Sheakpic.png",
    name: "Abinav Akashiya J",
    position: "Friend",
    message:
        "Shuraj is known for his kindness and reliability. He is always willing to help others and is trustworthy. Shuraj excels in his studies and is diligent in his work. He respects his elders and is well-liked by his peers for his friendly and approachable nature."
  },

];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
