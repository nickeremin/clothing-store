import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "lucide-react";

const vartiants: Variants = {
  initial: { opacity: 0 },
  animate: (i) => ({
    transition: {
      delay: 1 + 0.3 * (i + 1),
      duration: 0.3,
    },
    opacity: 1,
  }),
};

const mainNavItems = [
  {
    name: "COLLECTIONS",
    slug: "/",
  },
  {
    name: "BLOG",
    slug: "/",
  },
  {
    name: "CONTACT",
    slug: "/",
  },
];

const MotionLink = motion(Link);

function MainNav() {
  return (
    <nav className="relative flex justify-between ">
      <div className="flex flex-col items-start gap-6 text-[rgb(250,250,255)]">
        <MotionLink
          variants={vartiants}
          initial="initial"
          animate="animate"
          custom={-1}
          to="/"
          className="text-[2rem] font-black"
        >
          VINTAGE TOUCH
        </MotionLink>
        <ul className="flex flex-col items-start gap-4">
          {mainNavItems.map((item, i) => (
            <Link key={item.slug} to={item.slug}>
              <motion.li
                variants={vartiants}
                initial="initial"
                animate="animate"
                className="text-lg font-bold"
                custom={i}
              >
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="text-black">
        <MotionLink
          variants={vartiants}
          initial="initial"
          animate="animate"
          custom={-1}
          to="/cart"
          className="flex items-center gap-3 font-semibold te"
        >
          BAG
          <ShoppingBagIcon className="size-5" />
        </MotionLink>
      </div>
    </nav>
  );
}

export default MainNav;
