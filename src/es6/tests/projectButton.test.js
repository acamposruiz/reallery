import React from 'react';
import ProjectButton from '../../es6/projectButton.es6';
import renderer from 'react-test-renderer';

test('projectButton', () => {
    const stringParam = {"name": "Ducks", "type": "sculpture"};
    const component = renderer.create(
        <ProjectButton
            view="home"
            lng="en"
            key="0"
            key2="001"
            name="Project name"
            strings={stringParam}
            color="red"
            type="sculpture"
            publish="1"
        />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});