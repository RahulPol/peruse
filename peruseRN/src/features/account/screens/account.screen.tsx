import { AccountCore } from '../components/account-core.component';
import {
  AccountCover,
  AccountView,
  AppTitle,
  BodyContainer,
  FooterContainer,
  HeaderContainer,
} from '../styles/account.screen.style';

export const AccountScreen = () => {
  return (
    <AccountView>
      <AccountCover colors={['#FF9758', '#FF9758', '#DB4818']} />
      <HeaderContainer>
        <AppTitle variant="displayLarge">Peruse</AppTitle>
      </HeaderContainer>
      <BodyContainer>
        <AccountCore />
      </BodyContainer>
      <FooterContainer />
    </AccountView>
  );
};
