import * as React from "react";

type Props = {
  id: string;
  size?: number;
  width?: number;
  height?: number;
  onPress: () => void;
};

export default class Flag extends React.Component<Props, any> {
  static propTypes: {
    id: string;
    size: number;
    width: number;
    height: number;
    onPress: () => void;
  };
  static defaultProps: {
    size: number;
    width: number;
    height: number;
  };
  _renderIcon(): any;
  _onPress: () => void;
  render(): any;
}
