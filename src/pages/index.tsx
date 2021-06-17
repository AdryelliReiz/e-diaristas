import { Button, Typography, Container, CircularProgress } from '@material-ui/core';
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
  const {
    cep,
    setCep,
    validCep,
    seekProfessionals,
    error,
    dayLaborers,
    searchDone,
    loading,
    remainingDaily,
   } = useIndex();

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

          {error && <Typography color={'error'} >{error}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!validCep || loading}
            onClick={() => seekProfessionals(cep)}
          >
            {loading ?
              <CircularProgress
                size={20}
              /> : 'Buscar'
            }

          </Button>
        </FormElementContainer>
        
        {searchDone &&
          (dayLaborers.length > 0 ? (
          <ProfessionalsPaper>
            <ProfessionalsContainer>

              {dayLaborers.map((item, index) => {
                return (
                  <UserInformation
                    key={index}
                    name={item.nome_completo}
                    picture={item.foto_usuario}
                    rating={item.reputacao}
                    description={item.cidade}
                  />
                )
              })}
              
            </ProfessionalsContainer>
            
            {remainingDaily > 0 && (
              <Container sx={{textAlign: 'center'}} >
                <Typography sx={{mt: 5}} >
                  ...e mais {remainingDaily}
                  {remainingDaily > 1 ? 'profissionais atendem' : 'profissional atende'}
                   ao seu endereco
                </Typography>
                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{mt: 5}}
                >
                  Contartar um profissional</Button>
              </Container>
            )}
          </ProfessionalsPaper>)
          :
          (
            <Typography align={'center'} color={'textPrimary'} >
              Ainda nao temos nenhuma diarista disponivel em sua regiao
            </Typography>
          )
        )}

        
      </Container>
  
      
    </div>
  )
}
