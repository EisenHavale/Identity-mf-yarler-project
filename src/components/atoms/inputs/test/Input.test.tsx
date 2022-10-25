import React from 'react';
import {cleanup, render, screen} from '@testing-library/react'
import {Input} from '../Input'
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';


describe('Input simple tests to verify it is functional', () => {
  afterEach(cleanup); 
  
  it('Should render a simple input with label, id, name and onChange event handler', ()=>{
      const input = <Input label='Name' name='first' value='' onChange={()=>{console.log('Hello')}} />
      act(()=>{
        render(input)
      });
      const renderedInput = screen.queryByRole('textbox')
      const labelText = screen.getAllByText('Name')
      expect(renderedInput).toBeVisible;
      expect(renderedInput?.getAttribute('name')).toBe('first');
      expect(labelText.length).toBe(2);
  })
});
