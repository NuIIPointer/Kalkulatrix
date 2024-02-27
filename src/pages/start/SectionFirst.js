import React, { useRef, useEffect } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import { Box, Stack } from '@mui/material';

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

const SectionFirst = ({ isActive }) => {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  useEffect(() => {
    api({ scale: isActive ? 1.2 : 1 });
  }, [api, isActive]);

  useGesture(
    {
      // onDrag: ({ active, offset: [x, y] }) => api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.2 }),
      // onPinch: ({ offset: [d, a] }) => api({ zoom: d / 100, rotateZ: a }),
      onMove: ({ xy: [px, py] }) =>
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: isActive ? 1.3 : 1.2
        }),
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: isActive ? 1.2 : 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );
  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', mt: 4 }}>
      <animated.div
        ref={domTarget}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ
        }}
      >
        <Box sx={{ height: '25vh', aspectRatio: '1/1', backgroundColor: 'red' }}>Test</Box>
      </animated.div>
    </Stack>
  );
};

export default SectionFirst;
