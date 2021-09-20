import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  IconLink
} from "./FooterElements";
import github_icon from './../../Media/github_icon.png'
import linkedin_icon from './../../Media/linkedin_icon.png'
const Footer = () => {
    return (
        <div>
            <Box>
              <Container>
                <a href='https://github.com' target='_blank'>
                  <IconLink src={github_icon} />
                </a>
                <a href='https://linkedin.com' target='_blank'>
                  <IconLink src={linkedin_icon} />
                </a>
              </Container>
            </Box>
        </div>
    )
}

export default Footer
