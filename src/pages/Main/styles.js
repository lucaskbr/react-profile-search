import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #111422;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #1d1d1d;
  width: 100%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#eee',
})`
  flex: 1;
  height: 40px;
  background: #1c2431;
  padding: 0 15px;
  border: 2px solid #1c2431;
  border-bottom-color: #4421ff;
  color: #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #4430ff;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  background-color: #111422;
`;

export const User = styled.View`
  background: #1c2431;
  align-items: center;
  margin: 0 5px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border: 1px solid #eee;
  border-radius: 32px;
  background: #eee;
  margin-top: 10px;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  color: #9da0b0;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
  padding: 0 10px 0 10px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-top-right-radius: 0px;
  background: #4430ff;
  justify-content: center;
  align-items: center;
  height: 36px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
