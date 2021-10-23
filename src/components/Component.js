import React from 'react';
import { useInView } from 'react-intersection-observer';
import {Box, VStack} from "@chakra-ui/react";

const Component = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0% 0% 0% 0%"
    
  });

  console.log(inView)

  return (
    <Box ref={ref} bg="white">
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </Box>
  );
};

export default Component