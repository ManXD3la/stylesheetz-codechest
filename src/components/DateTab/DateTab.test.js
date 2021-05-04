import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DateTab from './DateTab';

describe(`DateTab Component`, () => {
    it('renders w/o crashing', () => {
        const div = document.createElement(`div`);
        ReactDOM.render(<DateTab />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it.skip(`renders the UI as expected`, () => {
        expect(
            renderer.create(<DateTab />).toJSON()
        ).toMatchSnapshot()
    })
})