// "use client";

// import { useEffect, useState } from "react";
// import styles from "./CustomCursor.module.css";

// export default function CustomCursor() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={styles.cursor}
//         style={{
//           transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//         }}
//       />

//       <div
//         className={styles.cursorOutline}
//         style={{
//           transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//         }}
//       />
//     </>
//   );
// }