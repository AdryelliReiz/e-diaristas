import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvionment/SafeEnvironment';


export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e vejo todos os profissionais da sua localidade'}
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
    </div>
  )
}
