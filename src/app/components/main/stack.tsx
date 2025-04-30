"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import html from '../../../../public/velocityscroll/html.png'
import css from '../../../../public/velocityscroll/css.png'
import js from '../../../../public/velocityscroll/js.png'
import react from '../../../../public/velocityscroll/react.png'

export default function Stack() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className="flex justify-center mt-2">
      <ul style={container}>
        {order.map((itemData) => (
          <motion.li
            key={itemData.id}
            layout
            transition={spring}
            style={{ ...item }}
          >
            <div style={{ width: "100%", height: "100%", position: "relative", borderRadius: "10px", overflow: "hidden" }}>
              <Image
                src={itemData.image}
                alt="Box"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


const initialOrder = [
  { id: 1, image: html },
  { id: 2, image: css },
  { id: 3, image: js },
  { id: 4, image: react },
];


function shuffle([...array]: typeof initialOrder) {
  return array.sort(() => Math.random() - 0.5);
}

 
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const item: React.CSSProperties = {
  width: 100,
  height: 100,
  borderRadius: "10px",
  overflow: "hidden",
};
