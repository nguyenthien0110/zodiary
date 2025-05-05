import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TbZodiacLibra } from "react-icons/tb";

const Header = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      ref={ref}
      className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-wide uppercase flex justify-center items-center gap-4">
          <TbZodiacLibra size={30} />
          <motion.div
            className="font-bold text-xl tracking-wide uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Zodiary
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden h-8 bg-gray-900">
        <motion.div
          animate={isMobile ? { x: ["100%", "-280%"] } : { x: 0 }}
          transition={
            isMobile ? { repeat: Infinity, duration: 20, ease: "linear" } : {}
          }
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
