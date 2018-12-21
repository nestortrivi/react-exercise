import * as React from 'react';
    
interface Props {
    orgName : string;
    onChange : (event) => void;
}

interface State {
    orgName : string;
}

export class InputBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    } 

    public render() {
        return (
            <>
                <input onChange={this.props.onChange} />
            </> 
        );
    }
}