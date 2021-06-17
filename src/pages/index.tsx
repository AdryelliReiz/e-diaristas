import { Button, Typography, Container } from '@material-ui/core';
import {
  FormElementContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from '@styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvionment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFielMask';


export default function Home() {
  const { cep, setCep, validCep } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e vejo todos os profissionais da sua localidade'}
      />
      <Container>
      <FormElementContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          <Typography color={'error'} >{validCep}</Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{width: '220px'}}
          >
            Buscar
          </Button>
        </FormElementContainer>
        
        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={'Adryelli Reiz'}
              picture={''}
              rating={4}
              description={'Rio Real - BA'}
            />
            <UserInformation
              name={'Adryelli Reiz'}
              picture={''}
              rating={4}
              description={'Rio Real - BA'}
            />
            <UserInformation
              name={'Adryelli Reiz'}
              picture={''}
              rating={4}
              description={'Rio Real - BA'}
            />
            <UserInformation
              name={'Adryelli Reiz'}
              picture={''}
              rating={4}
              description={'Rio Real - BA'}
            />
            <UserInformation
              name={'Adryelli Reiz'}
              picture={''}
              rating={4}
              description={'Rio Real - BA'}
            />
            <UserInformation
              name={'Adryelli Reiz'}
              picture={''}
              rating={4}
              description={'Rio Real - BA'}
              />
            </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
  
      
    </div>
  )
}
