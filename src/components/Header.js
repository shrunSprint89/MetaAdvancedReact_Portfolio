import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import useScroll from "../hooks/useScroll";

const socials = [
  {
    id: "email",
    icon: faEnvelope,
    url: "mailto: dedalob146@darkse.com",
  },
  {
    id: "github",
    icon: faGithub,
    url: "https://github.com/",
  },
  {
    id: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: "medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: "stackoverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
const internalLinks = [
  {
    id: "contactme",
    label: "Contact Me",
  },
  {
    id: "projects",
    label: "Projects",
  }
];

const Header = () => {
  const handleClick = (anchor, e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const boxRef = useRef(null);
  const { scrollDirection } = useScroll();
  useEffect(() => {
    if (scrollDirection === "down") {
      boxRef.current.style.transform = 'translateY(-200px)';
    } else {
      boxRef.current.style.transform = 'translateY(0)';
    }
  } , [scrollDirection]);

  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {/* Add social media links based on the `socials` data */}
              {
                socials.map(social => {
                  return (
                    <a key={ social.id } href={social.url} target="_blank">
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  )
                })
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}

              {internalLinks.map(link => {
                return (
                  <a key={ link.id } onClick={(e)=>handleClick(link.id, e)} href="">
                    { link.label }
                  </a>
                )
              })}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
