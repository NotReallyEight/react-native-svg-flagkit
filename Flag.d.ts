export default class Flag {
    static propTypes: {
        id: any;
        size: any;
        width: any;
        height: any;
        onPress: any;
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
