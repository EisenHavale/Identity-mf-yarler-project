import React from 'react';
import {cleanup, render, screen} from '@testing-library/react'
import {Input} from '../Input'
import { act } from 'react-dom/test-utils';



describe('Input simple tests to verify it is functional', () => {
  afterEach(cleanup); 
  
  it('Should render a simple input with label, id, name and onChange event handler', ()=>{
      const input = <Input color='info' error={false} label='Name' name='first' value='' onChange={()=>{console.log('Hello')}} />
      act(()=>{
        render(input)
      });
      const renderedInput = screen.queryByRole('textbox')
      const labelText = screen.getAllByText('Name')
      expect(renderedInput).toBeVisible;
      expect(renderedInput?.getAttribute('name')).toBe('first');
      expect(labelText.length).toBe(2);
  })
  it('should render main types of input, number, text and checkbox', () => {
    const numberInput = <Input type='number' color='info' error={false} label='Phone' name='celphone' value='' onChange={()=>{console.log('Hello')}} />
    const textInput = <Input type='text' color='info' error={false} label='Name' name='first' value='' onChange={()=>{console.log('Hello')}} />
    const passwordInput = <Input type='password' color='info' error={false} label='Password' name='password' value='' onChange={()=>{console.log('Hello')}} />
    const selectInput = <Input type='select' color='info' error={false} label='Select' name='select' value='' onChange={()=>{console.log('Hello')}} />
    act(()=>{
      render(numberInput);
    })
    const number = screen.getByRole('textbox',{name:'celphone'})
    expect(number.getAttribute('type')).toBe('number');
    act(()=>{
      render(textInput);
    })
    act(()=>{
      render(passwordInput);
    })
    act(()=>{
      render(selectInput);
    })
  })
});

