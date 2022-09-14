import * as React from "react";

export default class Flag extends React.Component {
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
