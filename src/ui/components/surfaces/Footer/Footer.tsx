import React from 'react';
import { AppList, FooterContainer, FooterStyled, FooterTitle } from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Quem somos?</FooterTitle>
          <Typography variant={'body2'} sx={{mt: 2}} >
            E-Diaristas te ajuda a encontrar um profissional perfeito 
            para realizar a limpeza de sua casa. Garantimos a melhor profissional 
            com total segunranca e praticidade! Sao milhares de clientes
            satisfeitos por todo o pais.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <img src={'/img/logos/app-store.png'} alt={'App Store'} />
              </a>
            </li>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;