import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Calculator from '..';
import * as S from '../styles';

describe('Calculator', () => {
  it('should increase correctly', () => {
    render(<Calculator />);
    const increaseButton = screen.container.findAllByType(S.Button)[0];
    const numberComponent = screen.container.findByType(S.NumberText);
    const initialNumber = numberComponent.props.children as number;
    fireEvent.press(increaseButton);
    const expectedNemNumber = initialNumber + 1;
    const receivedNewNumber = numberComponent.props.children as number;
    expect(receivedNewNumber).toBe(expectedNemNumber);
  });
});
