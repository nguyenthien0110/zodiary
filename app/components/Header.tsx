import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TbZodiacLibra } from "react-icons/tb";

const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <header
      ref={ref}
      className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-wide uppercase flex justify-center items-center gap-4">
          <TbZodiacLibra size={30}/> Zodiary
        </div>
      </div>
      <div className="overflow-hidden h-8 bg-gray-900">
        <motion.div
          style={{ x }}
          className="whitespace-nowrap text-sm font-medium py-1 px-4"
        >
          12 Chòm Sao - Bí Ẩn Chiêm Tinh - Tình Yêu & Tính Cách - Bạch Dương,
          Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Bọ Cạp, Nhân Mã,
          Ma Kết, Bảo Bình, Song Ngư 🌟
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
