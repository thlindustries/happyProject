import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

interface SheduleItemOpenProps {
  open: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  justify-content: center;
  align-items: center;

  height: 240px;
`;

export const StyledImage = styled.Image`
  width: ${`${Dimensions.get('window').width}px`};
  height: 240px;

  resize-mode: cover;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const DetailsContainerTitle = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const DetailsContainerDescription = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border: 1.2px #b3dae2 solid;

  margin-top: 40px;
  background: #e6f7fb;
`;

export const RoutesContainer = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesContainerText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const SeparatorBar = styled.View`
  height: 0.8px;
  width: 100%;
  background: #d3e2e6;
  margin: 40px 0;
`;

export const InstructionsTitle = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const InstructionsDescriptions = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SheduleItemOpen = styled.View<SheduleItemOpenProps>`
  width: 48%;
  padding: 20px;

  ${(props) =>
    props.open
      ? css`
          border: solid 1px #a1e9c5;
          background: #edfff6;
        `
      : css`
          border: solid 1px #e9a1a1;
          background: #ffeded;
        `}

  border-radius: 20px;
`;

export const ScheduleItemBlue = styled.View`
  width: 48%;
  padding: 20px;

  background: #e6f7fd;
  border: solid 1px #b3dae2;
  border-radius: 20px;
`;

export const ShcheduleTextOpen = styled.Text<SheduleItemOpenProps>`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  ${(props) =>
    props.open
      ? css`
          color: #37c77f;
        `
      : css`
          color: #c73737;
        `}
`;

export const ShcheduleTextBlue = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #5c8599;
`;

export const ContactButton = styled(RectButton)`
  background: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 56px;

  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
