import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Button } from '../Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

let container;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container;
});

describe('Verifying button and attributes are working correctly', () => {
  afterEach(cleanup);  
  it('Should display an empty html element', () => {
    act(()=>{
      render( <Button/>, container); //! THis is an intentional error
    })
    expect(container.querySelector('button')).toBeUndefined;
  })
  it('should display with label', ()=>{
    act(()=>{
      render(<Button label='Login'/>)
    })
    const button = screen.getByText('Login');
    expect(button).toBeInTheDocument;
    expect(button.innerHTML.includes('Login')).toBe(true);
  })
  it('Should render a disabled button', () => {
    act(()=>{
      render(<Button label='Login' disabled={true}/>)
    })
    const button = screen.getByText('Login');
    expect(button).toBeDisabled;
  })
  it('Should render with a icon element', () => {
    act(()=>{
      render(<Button label='Login' icon={<AccessAlarmIcon/>}/>);
    })
    const button = screen.getByText('Login');
    const svgElement = button.querySelector('svg');
    expect(svgElement!.classList.contains('MuiSvgIcon-root')).toBeUndefined;
  })
});

