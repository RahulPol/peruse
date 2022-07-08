import { useState } from 'react';
import { useTheme } from 'styled-components/native';

import {
  AccountCoreView,
  ActionButton,
  ActionText,
  ButtonContainerView,
  FormContainerView,
} from '../styles/account-core.component.style';
import { AccountLogin } from './account-login.component';
import { AccountRegister } from './account-register.component';

export const AccountCore = () => {
  const { colors } = useTheme();
  const [signInActive, setSignInActive] = useState(true);
  const [signUpActive, setSignUpActive] = useState(false);

  const signInPressed = () => {
    setSignInActive(true);
    setSignUpActive(false);
  };

  const signUpPressed = () => {
    setSignInActive(false);
    setSignUpActive(true);
  };

  return (
    <AccountCoreView>
      <ButtonContainerView>
        <ActionButton onPress={() => signInPressed()}>
          <ActionText style={!signInActive && { color: colors.ui.disabled }}>
            Sign In
          </ActionText>
        </ActionButton>
        <ActionButton onPress={() => signUpPressed()}>
          <ActionText style={!signUpActive && { color: colors.ui.disabled }}>
            Sign Up
          </ActionText>
        </ActionButton>
      </ButtonContainerView>
      <FormContainerView>
        {signInActive && <AccountLogin />}
        {signUpActive && <AccountRegister />}
      </FormContainerView>
    </AccountCoreView>
  );
};
